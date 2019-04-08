import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import SignInPage from "./components/pages/SignInPage";
import SignUpPage from "./components/pages/SignUpPage";
import IntroPage from "./components/pages/IntroPage";

const AppStack = createStackNavigator({ SignUp: SignUpPage });
const AuthStack = createStackNavigator({
  Intro: IntroPage,
  SignIn: SignInPage,
  SignUp: SignUpPage
});

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Auth"
    }
  )
);
