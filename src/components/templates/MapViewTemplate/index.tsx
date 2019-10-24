import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { NavigationProps } from "../../../navigation/type";
import Map from "../../organism/Map";
import Icon from "../../atoms/IconButton";
import routes from "../../../navigation/routes";
import IconButton from "../../atoms/IconButton";

type Styles = {
  base: ViewStyle;
  buttonView: ViewStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  base: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  buttonView: {
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 1
  }
});

type Props = NavigationProps;

const MapViewTemplate: React.FC<Props> = (props: Props): React.ReactElement => {
  const onPressPhoto = () =>
    props.navigation.navigate(routes.mapStackRoutes.camera);
  return (
    <View style={styles.base}>
      <Map />
      <View style={styles.buttonView}>
        {
          <IconButton
            name="camera"
            color="primary"
            size="medium"
            onPress={onPressPhoto}
          />
        }
      </View>
    </View>
  );
};
export default MapViewTemplate;
