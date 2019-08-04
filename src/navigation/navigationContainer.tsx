import React from "react";
import mainStackMapper from "./navigationStacks";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Navigator from "./navigationService";

import routes from "./routes";

const AppContainer = createAppContainer(
  createSwitchNavigator(mainStackMapper, {
    // Change Initial Route Here for Debugging
    initialRouteName: routes.mainStackRoutes.mapStack
  })
);

const ReferrencedAppContainer = () => (
  <AppContainer
    ref={(navigatorRef: any) => {
      Navigator.setTopLevelNavigator(navigatorRef);
    }}
  />
);

export default ReferrencedAppContainer;
