import React from "react";
import { View, StyleSheet, Rationale } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import MapView, { Region, PROVIDER_GOOGLE } from "react-native-maps";
import Text from "../../atoms/Text";
import ArtiefactError, { errorTypeNames } from "../../../entity/Error";
import { checkPermission, requestPermission } from "../../../helper/permission";

import { errorHandler } from "../../../logics/error";

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

const DEFAULT_PROPS = {
  provider: PROVIDER_GOOGLE,
  showsTraffic: false,
  showsIndoors: false,
  zoomControlEnabled: false,
  pitchEnabled: false,
  toolbarEnabled: false,
  moveonMarkerPress: false
};

export type Props = {
  currentRegion?: Region;
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
export default class Map extends React.Component<Props, State> {
  state: State = {};
  watchID?: any;
  permission?: boolean;

  async componentDidMount() {
    if (true) {
      this.watchID = Geolocation.watchPosition(
        position => {
          console.log(position);
          // Create the object to update this.state.mapRegion through the onRegionChange function
          let region = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.00922 * 1.5,
            longitudeDelta: 0.00421 * 1.5
          };
          this.onRegionChange(region);
        },
        (error: PositionError) => {
          const artiefactError = new ArtiefactError({
            error,
            errorType: errorTypeNames.positionError
          });
          errorHandler(artiefactError);
        }
      );
    } else {
      const rationale: Rationale = {
        title: "title",
        message: "message",
        buttonPositive: "positive",
        buttonNegative: "negative",
        buttonNeutral: "neutral"
      };
      const permissionResult = await checkPermission("location");
      console.log(permissionResult);
      const requestPermissionResult = await requestPermission({
        type: "location",
        rationale
      });
      console.log(requestPermissionResult);
    }
  }

  async setCurrentRegion() {
    return await Geolocation.getCurrentPosition(
      (region: Position) => {
        const newRegion: Region = {
          latitude: region.coords.latitude,
          longitude: region.coords.longitude,
          latitudeDelta: 0,
          longitudeDelta: 0
        };
        this.setState({ currentRegion: newRegion });
      },
      error => {
        const artiefactError = new ArtiefactError({
          error,
          errorType: errorTypeNames.positionError
        });
        errorHandler(artiefactError);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  }

  onRegionChange(region: Region) {
    this.setState({
      currentRegion: region
    });
  }

  render() {
    console.log(this.state.currentRegion);
    return true ? (
      <View style={styles.container}>
        {this.state.currentRegion && (
          <MapView
            style={styles.map}
            region={{
              latitude: this.state.currentRegion.latitude,
              longitude: this.state.currentRegion.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01
            }}
            {...DEFAULT_PROPS}
          >
            {this.props.children}
          </MapView>
        )}
      </View>
    ) : (
      <View>
        <Text>Permission not granted for maps</Text>
      </View>
    );
  }
}
