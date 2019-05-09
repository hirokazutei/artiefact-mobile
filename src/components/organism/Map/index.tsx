import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Region, PROVIDER_GOOGLE } from "react-native-maps";

const styles = StyleSheet.create({
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

type Props = {
  currentRegion?: Region;
  children: Array<React.ReactElement> | React.ReactElement;
};

type State = {
  currentRegion?: Region;
  watchID?: any;
};

/**
 * Map
 *
 */
export default class Map extends React.Component<Props, State> {
  state: State = {};
  watchID?: any;

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        // Create the object to update this.state.mapRegion through the onRegionChange function
        let region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.00922 * 1.5,
          longitudeDelta: 0.00421 * 1.5
        };
        this.onRegionChange(region);
      },
      error => console.log(error)
    );
  }

  async setCurrentRegion() {
    return await navigator.geolocation.getCurrentPosition(
      (region: Position) => {
        console.log(region);
        const newRegion: Region = {
          latitude: region.coords.latitude,
          longitude: region.coords.longitude,
          latitudeDelta: 0,
          longitudeDelta: 0
        };
        this.setState({ currentRegion: newRegion });
      },
      error => console.log(error),
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  }

  onRegionChange(region: Region) {
    this.setState({
      currentRegion: region
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
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
    );
  }
}