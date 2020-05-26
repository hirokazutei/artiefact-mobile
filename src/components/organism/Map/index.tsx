import React from "react";
import { Dimensions, View, StyleSheet, Rationale } from "react-native";
import geolocation from "@react-native-community/geolocation";
import MapView, { Region, PROVIDER_GOOGLE } from "react-native-maps";
import { SubHeading } from "../../atoms/Text";
import Space from "../../atoms/Space";
import Button from "../../atoms/Button";
import ArtiefactError, { errorTypeNames } from "../../../entity/Error";
import {
  checkPermission,
  requestPermission,
  permissionStatus,
} from "../../../helper/permission";
import { errorHandler } from "../../../logics/error";
import { DEFAULT_DELTA } from "./const";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  childrenContainer: {
    flex: 1,
  },
});

const DEFAULT_PROPS = {
  provider: PROVIDER_GOOGLE,
  showsTraffic: false,
  showsIndoors: false,
  pitchEnabled: true,
  toolbarEnabled: true,
  moveonMarkerPress: true,
  showCompass: true,
  zoomEnabled: true,
  zoomControlEnabled: true,
  rotateEnabled: true,
  scrollEnabled: true,
  showScale: true,
  maxDelta: DEFAULT_DELTA,
};

type Props = {
  children?: React.ReactNode;
  currentRegion?: Region;
  displaySelf?: boolean;
  followSelf?: boolean;
  onPressFollowSelfCancel?: () => void;
};

type State = {
  currentRegion?: Region;
  watchID?: any;
  permission?: boolean;
};

/**
 * Map
 *
 */
class Map extends React.Component<Props, State> {
  state: State = {};

  async componentDidMount() {
    await this.checkMapPermission();
    if (this.state.permission) {
      this.watchPosition();
      if (this.state.currentRegion) {
        this.setRegion(this.state.currentRegion);
      } else {
        this.setCurrentRegion();
      }
    }
  }

  componentDidUpdate(_: Props, prevState: State) {
    if (!prevState.permission && this.state.permission) {
      this.watchPosition();
    }
  }

  // Watches the current location of the user
  watchPosition() {
    const watchID = geolocation.watchPosition(
      (position) => {
        const region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta:
            (this.state.currentRegion &&
              this.state.currentRegion.latitudeDelta) ||
            DEFAULT_DELTA,
          longitudeDelta:
            (this.state.currentRegion &&
              this.state.currentRegion.longitudeDelta) ||
            DEFAULT_DELTA * ASPECT_RATIO,
        };
        this.props.followSelf && this.setRegion(region);
      },
      (error: PositionError) => {
        const artiefactError = new ArtiefactError({
          error,
          errorType: errorTypeNames.positionError,
        });
        errorHandler(artiefactError);
      }
    );
    this.setState({ ...this.state, watchID });
  }

  // Check Map's Permission
  async checkMapPermission() {
    const permissionResult = await checkPermission("location");
    if (permissionResult === permissionStatus.granted) {
      this.setState({ ...this.state, permission: true });
      return;
    } else {
      const rationale: Rationale = {
        title: "title",
        message: "message",
        buttonPositive: "positive",
        buttonNegative: "negative",
        buttonNeutral: "neutral",
      };
      const requestPermissionResult = await requestPermission({
        type: "location",
        rationale,
      });
      if (
        requestPermissionResult === permissionStatus.denied ||
        requestPermissionResult === permissionStatus.blocked
      ) {
        this.setState({ ...this.state, permission: false });
      }
    }
    this.setState({ ...this.state, permission: false });
  }

  async setCurrentRegion() {
    return await geolocation.getCurrentPosition(
      (region: Position) => {
        const newRegion: Region = {
          latitude: region.coords.latitude,
          longitude: region.coords.longitude,
          latitudeDelta:
            (this.state.currentRegion &&
              this.state.currentRegion.latitudeDelta) ||
            DEFAULT_DELTA,
          longitudeDelta:
            (this.state.currentRegion &&
              this.state.currentRegion.longitudeDelta) ||
            DEFAULT_DELTA * ASPECT_RATIO,
        };
        this.setRegion(newRegion);
      },
      (error) => {
        const artiefactError = new ArtiefactError({
          error,
          errorType: errorTypeNames.positionError,
        });
        errorHandler(artiefactError);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  }

  setRegion(region: Region) {
    this.setState({
      ...this.state,
      currentRegion: { ...this.state.currentRegion, ...region },
    });
  }

  render() {
    const PermissionNotGrantedView = (
      <View>
        <Space.Inset all="massive">
          <SubHeading>Permission not granted for maps.</SubHeading>
          <Space.Stack size="medium" />
          <Button
            label="Request Permission"
            onPress={() => this.checkMapPermission()}
          />
        </Space.Inset>
      </View>
    );

    const Map = this.state.currentRegion ? (
      <MapView
        style={styles.map}
        region={{
          latitude: this.state.currentRegion.latitude,
          longitude: this.state.currentRegion.longitude,
          latitudeDelta: this.state.currentRegion.latitudeDelta,
          longitudeDelta: this.state.currentRegion.longitudeDelta,
        }}
        showsUserLocation={this.props.displaySelf}
        onPanDrag={() => {
          this.props.onPressFollowSelfCancel &&
            this.props.onPressFollowSelfCancel();
        }}
        {...DEFAULT_PROPS}
      />
    ) : null;

    return this.state.permission ? Map : PermissionNotGrantedView;
  }
}

export { Props };

export default Map;
