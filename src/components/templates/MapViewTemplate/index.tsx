import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { NavigationProps } from "../../../navigation/type";
import Map from "../../organism/Map";
import routes from "../../../navigation/routes";
import IconButton from "../../atoms/IconButton";
import Space from "../../atoms/Space";

type Styles = {
  base: ViewStyle;
  buttonView: ViewStyle;
  mapView: ViewStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  base: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonView: {
    alignSelf: "stretch",
    zIndex: 1,
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  mapView: {
    alignSelf: "stretch",
  },
});

type Props = NavigationProps;

const MapViewTemplate: React.FC<Props> = (props: Props): React.ReactElement => {
  const onPressPhoto = () =>
    props.navigation.navigate(routes.mapStackRoutes.camera);
  return (
    <View style={styles.base}>
      <Map />
      <View style={styles.buttonView}>
        <Space.Inset all="large">
          <IconButton
            name="camera"
            color="primary"
            size="large"
            onPress={onPressPhoto}
          />
        </Space.Inset>
      </View>
    </View>
  );
};
export default MapViewTemplate;
