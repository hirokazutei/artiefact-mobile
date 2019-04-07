import { createStackNavigator, createAppContainer } from "react-navigation";
import SignInPage from "./components/pages/SignInPage";
import SignUpPage from "./components/pages/SignUpPage";
import IntroPage from "./components/pages/IntroPage";

const AppNavigator = createStackNavigator(
  {
    Intro: IntroPage,
    SignIn: SignInPage,
    SignUp: SignUpPage
  },
  {
    initialRouteName: "Intro"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
