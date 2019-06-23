import React from "react";
import { NavigationScreenProp } from "react-navigation";
import SignUpPageTemplate from "../../templates/SignUpTemplate/index";
import { actions } from "../../../redux/reducers/authentication/actionTypes";
import { StateProps, DispatchProps } from "./container";
import NavigationTitle from "../../atoms/NavigationTitle";
import BackButton from "../../atoms/NavigationBackButton";

type NavigationProps = {
  navigation: NavigationScreenProp<any, any>;
};

export type Props = StateProps & DispatchProps & NavigationProps;

class SignUpPage extends React.Component<Props> {
  static navigationOptions = {
    headerTitle: <NavigationTitle>{"SIGN UP"}</NavigationTitle>,
    headerLeft: <BackButton action={{ type: actions.RESET_SIGNUP_FORM }} />
  };

  render() {
    return <SignUpPageTemplate {...this.props} />;
  }
}

export default SignUpPage;
