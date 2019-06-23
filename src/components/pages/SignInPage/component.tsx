import React from "react";
import SignInTemplate from "../../templates/SignInTemplate/index";
import { actions } from "../../../redux/reducers/authentication/actionTypes";
import BackButton from "../../atoms/NavigationBackButton";
import { Props } from "./container";

class SignInPage extends React.Component<Props> {
  static navigationOptions = {
    headerTitle: "Sign Up",
    headerLeft: <BackButton action={{ type: actions.RESET_SIGNUP_FORM }} />
  };

  render() {
    return <SignInTemplate {...this.props} />;
  }
}

export default SignInPage;
