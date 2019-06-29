import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import SignInPage from "./components/pages/SignInPage";
import SignUpPage from "./components/pages/SignUpPage";
import InitializationPage from "./components/pages/InitializationPage";
import IntroPage from "./components/pages/IntroPage";
import MapViewPage from "./components/pages/MapViewPage";

const AuthStack = createStackNavigator({
  Intro: IntroPage,
  SignIn: SignInPage,
  SignUp: SignUpPage
});

const MapStack = createStackNavigator({
  MapView: MapViewPage
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Initialize: InitializationPage,
      Auth: AuthStack,
      MapStack: MapStack
    },
    {
      initialRouteName: "Auth"
    }
  )
);
