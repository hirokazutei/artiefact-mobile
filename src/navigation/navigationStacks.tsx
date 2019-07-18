import {
  createStackNavigator,
  NavigationContainer
} from "react-navigation";
import SignInPage from "../components/pages/SignInPage";
import SignUpPage from "../components/pages/SignUpPage";
import InitializationPage from "../components/pages/InitializationPage";
import IntroPage from "../components/pages/IntroPage";
import MapViewPage from "../components/pages/MapViewPage";
import {
  AuthStackRouteTypes,
  MainStackRouteTypes,
  MapStackRouteTypes
} from "./routes";

const authStackMapper: Readonly<
  { [key in AuthStackRouteTypes]: React.FunctionComponent<any> }
> = {
  intro: IntroPage,
  signIn: SignInPage,
  signUp: SignUpPage
};

const AuthStack = createStackNavigator(authStackMapper);

const mapStackMapper: Readonly<
  { [key in MapStackRouteTypes]: React.FunctionComponent<any> }
> = {
  mapView: MapViewPage
};

const MapStack = createStackNavigator(mapStackMapper);

const mainStackMapper: Readonly<
  { [key in MainStackRouteTypes]: NavigationContainer }
> = {
  initialize: InitializationPage,
  auth: AuthStack,
  mapStack: MapStack
};

export default mainStackMapper
