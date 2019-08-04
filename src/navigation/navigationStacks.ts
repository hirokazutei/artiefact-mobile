import React from "react";
import { createStackNavigator, NavigationContainer } from "react-navigation";
import SignInPage from "../components/pages/SignInPage";
import SignUpPage from "../components/pages/SignUpPage";
import InitializationPage from "../components/pages/InitializationPage";
import IntroPage from "../components/pages/IntroPage";
import MapViewPage from "../components/pages/MapViewPage";
import CameraPage from "../components/pages/CameraPage";
import {
  AuthStackRouteTypes,
  MainStackRouteTypes,
  MapStackRouteTypes,
  InitializationRouteTypes
} from "./routes";

const initializaMapper: Readonly<
  { [key in InitializationRouteTypes]: React.FunctionComponent<any> }
> = {
  initialization: InitializationPage
};
const InitializationStack = createStackNavigator(initializaMapper);

const authStackMapper: Readonly<
  {
    [key in AuthStackRouteTypes]:
      | React.FunctionComponent<any>
      | React.ComponentClass<any>
  }
> = {
  intro: IntroPage,
  signIn: SignInPage,
  signUp: SignUpPage
  // Temporarily changing these to MapView
};

const AuthStack = createStackNavigator(authStackMapper);

const mapStackMapper: Readonly<
  { [key in MapStackRouteTypes]: React.FunctionComponent<any> }
> = {
  camera: CameraPage,
  mapView: MapViewPage
};

const MapStack = createStackNavigator(mapStackMapper);

const mainStackMapper: Readonly<
  { [key in MainStackRouteTypes]: NavigationContainer }
> = {
  authStack: AuthStack,
  initializationStack: InitializationStack,
  mapStack: MapStack
};

export default mainStackMapper;
