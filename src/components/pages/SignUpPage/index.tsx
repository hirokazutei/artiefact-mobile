import React from "react";
import SignUpPageTemplate from "../../templates/SignUpTemplate/index";
import { NavigationScreenProp } from "react-navigation";

type NavigationProps = {
  navigation: NavigationScreenProp<any, any>;
};

class SignUpPage extends React.Component<NavigationProps> {
  render() {
    return <SignUpPageTemplate />;
  }
}

export default SignUpPage;
