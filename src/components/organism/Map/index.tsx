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
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const DEFAULT_PROPS = {
  provider: PROVIDER_GOOGLE,
  showsTraffic: false,
  showsIndoors: false,
  zoomControlEnabled: false,
  pitchEnabled: false,
  toolbarEnabled: false,
  moveonMarkerPress: false,
};

type MapProps = {
  currentRegion?: Region;
  shouldMapUpdate?: boolean;
  children?: Array<React.ReactElement> | React.ReactElement;
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
class Map extends React.Component<MapProps, State> {
  state: State = {};

  async componentDidMount() {
    await this.checkMapPermission();
    if (this.state.permission) {
      if (this.props.shouldMapUpdate) {
        this.watchPosition();
      } else if (this.props.currentRegion) {
        this.setRegion(this.props.currentRegion);
      } else {
        this.setCurrentRegion();
      }
    }
  }

  componentWillUnmount() {
    geolocation.clearWatch(this.state.watchID);
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
        this.setRegion(region);
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
    }
    if (permissionResult === permissionStatus.unavailable) {
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
    this.setState({ ...this.state, currentRegion: region });
  }

  render() {
    return this.state.permission ? (
      <View style={styles.container}>
        {this.state.currentRegion && (
          <MapView
            style={styles.map}
            region={{
              latitude: this.state.currentRegion.latitude,
              longitude: this.state.currentRegion.longitude,
              latitudeDelta: this.state.currentRegion.latitudeDelta,
              longitudeDelta: this.state.currentRegion.longitudeDelta,
            }}
            {...DEFAULT_PROPS}
          >
            {this.props.children}
          </MapView>
        )}
        {this.props.children}
      </View>
    ) : (
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
  }
}

export { MapProps };

export default Map;
