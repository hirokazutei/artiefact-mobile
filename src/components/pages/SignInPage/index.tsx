import React from "react";
import SignInTemplate from "../../templates/SignInTemplate/index";
import { NavigationScreenProp } from "react-navigation";

export interface HomeScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

const SignInPage: React.FC = (): React.ReactElement => {
  return <SignInTemplate />;
};

export default SignInPage;
