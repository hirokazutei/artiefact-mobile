import React, { useState } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { NavigationProps } from "../../../navigation/type";
import Map from "../../organism/Map";
import routes from "../../../navigation/routes";
import IconButton from "../../atoms/IconButton";
import Space from "../../atoms/Space";

type Styles = {
  buttonContainer: ViewStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

type Props = NavigationProps;

const MapViewTemplate: React.FC<Props> = (props: Props): React.ReactElement => {
  const [followSelf, setFollowSelf] = useState<boolean>(true);
  const onPressPhoto = () =>
    props.navigation.navigate(routes.mapStackRoutes.camera);
  const onPressFollowSelf = () => setFollowSelf(!followSelf);
  const onPressFollowSelfCancel = () => {
    console.log(followSelf);
    setFollowSelf(false);
  };
  return (
    <>
      <Map
        displaySelf={true}
        followSelf={followSelf}
        onPressFollowSelfCancel={onPressFollowSelfCancel}
      />
      <View style={styles.buttonContainer}>
        <Space.Inset all="huge">
          <IconButton
            name="navigation"
            color="secondary"
            size="medium"
            type="outline"
            onPress={onPressFollowSelf}
          />
        </Space.Inset>
        <Space.Inset all="large">
          <IconButton
            name="plus"
            color="primary"
            size="large"
            onPress={onPressPhoto}
          />
        </Space.Inset>
      </View>
    </>
  );
};
export default MapViewTemplate;
