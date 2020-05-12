import { createStackNavigator, NavigationContainer } from "react-navigation";
import { ConnectedComponentClass } from "react-redux";
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
  InitializationRouteTypes,
} from "./routes";

// FIXME: Page Types
const initializaMapper: {
  [key in InitializationRouteTypes]: React.Component<any>
} = {
  initialization: InitializationPage,
};
const InitializationStack = createStackNavigator(initializaMapper);

const authStackMapper: { [key in AuthStackRouteTypes]: any } = {
  intro: IntroPage,
  signIn: SignInPage,
  signUp: SignUpPage,
};

const AuthStack = createStackNavigator(authStackMapper);

const mapStackMapper: {
  [key in MapStackRouteTypes]: React.FC<any> | React.Component<any>
} = {
  mapView: MapViewPage,
  camera: CameraPage,
};

const MapStack = createStackNavigator(mapStackMapper);

const mainStackMapper: Readonly<
  { [key in MainStackRouteTypes]: NavigationContainer }
> = {
  mapStack: MapStack,
  initializationStack: InitializationStack,
  authStack: AuthStack,
};

export default mainStackMapper;
