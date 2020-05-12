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

const initializaMapper: Readonly<
  {
    [key in InitializationRouteTypes]:
      | React.ReactElement<any>
      | React.FC<any>
      | ConnectedComponentClass<any, any>
  }
> = {
  initialization: InitializationPage,
};
const InitializationStack = createStackNavigator(initializaMapper);

const authStackMapper: Readonly<
  {
    [key in AuthStackRouteTypes]:
      | React.ReactElement<any>
      | React.FC<any>
      | ConnectedComponentClass<any, any>
  }
> = {
  intro: IntroPage,
  signIn: SignInPage,
  signUp: SignUpPage,
};

const AuthStack = createStackNavigator(authStackMapper);

const mapStackMapper: Readonly<
  {
    [key in MapStackRouteTypes]:
      | React.ReactElement<any>
      | React.FC<any>
      | ConnectedComponentClass<any, any>
  }
> = {
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
