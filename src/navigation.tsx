import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import SignInPage from "./components/pages/SignInPage";
import SignUpPage from "./components/pages/SignUpPage";
import IntroPage from "./components/pages/IntroPage";
import MapViewPage from "./components/pages/MapViewPage";

const AuthStack = createStackNavigator({
  MapView: MapViewPage,
  Intro: IntroPage,
  SignIn: SignInPage,
  SignUp: SignUpPage
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack
    },
    {
      initialRouteName: "Auth"
    }
  )
);
