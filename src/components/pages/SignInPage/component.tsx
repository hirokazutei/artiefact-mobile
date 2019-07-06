import React from "react";
import SignInTemplate from "../../templates/SignInTemplate/index";
import { StateProps, DispatchProps } from "./container";
import { actions } from "../../../redux/reducers/authentication/actionTypes";
import BackButton from "../../atoms/NavigationBackButton";
import NavigationTitle from "../../atoms/NavigationTitle";

export type Props = StateProps & DispatchProps;

class SignInPage extends React.Component<Props> {
  static navigationOptions = {
    headerTitle: <NavigationTitle>{"SIGN IN"}</NavigationTitle>,
    headerLeft: <BackButton action={{ type: actions.AUTH_RESET_SIGNUP_FORM }} />
  };

  render() {
    return <SignInTemplate {...this.props} />;
  }
}

export default SignInPage;
