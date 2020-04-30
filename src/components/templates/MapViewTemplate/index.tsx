import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { NavigationProps } from "../../../navigation/type";
import Map from "../../organism/Map";
// import Icon from "../../atoms/IconButton";
import routes from "../../../navigation/routes";
import IconButton from "../../atoms/IconButton";

type Styles = {
  base: ViewStyle;
  button: ViewStyle;
  buttonView: ViewStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  base: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {},
  buttonView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
});

type Props = NavigationProps;

const MapViewTemplate: React.FC<Props> = (props: Props): React.ReactElement => {
  const onPressPhoto = () =>
    props.navigation.navigate(routes.mapStackRoutes.camera);
  return (
    <View style={styles.base}>
      <Map>
        <View style={styles.buttonView}>
          <View style={styles.button}>
            <IconButton
              name="camera"
              color="primary"
              size="medium"
              onPress={onPressPhoto}
            />
          </View>
        </View>
      </Map>
    </View>
  );
};
export default MapViewTemplate;
