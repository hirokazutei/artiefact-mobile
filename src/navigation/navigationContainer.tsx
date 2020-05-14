import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import mainStackMapper from "./navigationStacks";
import Navigator from "./navigationService";
import { spacing } from "../symbols";

import routes from "./routes";

const styles = StyleSheet.create({
  base: {
    flex: 1,
    paddingBottom: spacing.medium,
  },
});

const AppContainer = createAppContainer(
  createSwitchNavigator(mainStackMapper, {
    initialRouteName: routes.mainStackRoutes.initializationStack,
  })
);

const ReferrencedAppContainer = () => (
  <KeyboardAvoidingView
    style={styles.base}
    behavior={Platform.OS == "ios" ? "padding" : "height"}
  >
    <AppContainer
      ref={(navigatorRef: any) => {
        Navigator.setTopLevelNavigator(navigatorRef);
      }}
    />
  </KeyboardAvoidingView>
);

export default ReferrencedAppContainer;
