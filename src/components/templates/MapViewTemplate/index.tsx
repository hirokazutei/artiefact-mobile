import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { NavigationProps } from "../../../navigation/type";
import Map from "../../organism/Map";
import Button from "../../atoms/Button";
import routes from "../../../navigation/routes";

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
    position: "absolute"
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
        <Button
          color="secondary"
          size="huge"
          label="Photo"
          onPress={onPressPhoto}
        />
      </View>
    </View>
  );
};

export default MapViewTemplate;
