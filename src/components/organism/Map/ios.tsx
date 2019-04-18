import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker, Region, PROVIDER_GOOGLE } from "react-native-maps";

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

type Props = {
  currentRegion?: Region;
};

type State = {
  currentRegion?: Region;
  watchID?: any;
};

export default class IOSMap extends React.Component<Props, State> {
  state: State = {};
  /*
  componentDidMount() {
    this.setCurrentRegion();
    this.shift = navigator.geolocation.watchPosition(position => position);
  }*/

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
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: this.state.currentRegion.latitude,
              longitude: this.state.currentRegion.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01
            }}
          >
            <Marker
              title="This is a title"
              description="This is a description"
              coordinate={{
                latitude: this.state.currentRegion.latitude,
                longitude: this.state.currentRegion.longitude,
                latitudeDelta: 0.00522,
                longitudeDelta: 0.00221
              }}
            />
          </MapView>
        )}
      </View>
    );
  }
}
