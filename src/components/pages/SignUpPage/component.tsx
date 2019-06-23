import React from "react";
import SignUpPageTemplate from "../../templates/SignUpTemplate/index";
import { actions } from "../../../redux/reducers/authentication/actionTypes";
import BackButton from "../../atoms/NavigationBackButton";
import { Props } from "./container";

class SignUpPage extends React.Component<Props> {
  static navigationOptions = {
    headerTitle: "Sign Up",
    headerLeft: <BackButton action={{ type: actions.RESET_SIGNUP_FORM }} />
  };

  render() {
    return <SignUpPageTemplate {...this.props} />;
  }
}

export default SignUpPage;
