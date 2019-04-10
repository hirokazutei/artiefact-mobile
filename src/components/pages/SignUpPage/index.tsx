import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { NavigationScreenProp } from "react-navigation";
import SignUpPageTemplate from "../../templates/SignUpTemplate/index";
import { actions } from "../../../redux/reducers/authentication/actionTypes";
import { State } from "../../../redux/rootReducer";

type StateProps = {
  agreeToTerms: boolean;
  isButtonDisabled: boolean;
};

type DispatchProps = {
  onPressTerms: () => void;
};

type NavigationProps = {
  navigation: NavigationScreenProp<any, any>;
};

export type Props = StateProps & DispatchProps & NavigationProps;

class SignUpPage extends React.Component<Props> {
  render() {
    return <SignUpPageTemplate {...this.props} />;
  }
}

export default connect(
  (state: State): StateProps => {
    const { agreeToTerms } = state.authentication;
    return {
      agreeToTerms,
      isButtonDisabled: !agreeToTerms
    };
  },
  (dispatch: Dispatch): DispatchProps => {
    return {
      onPressTerms: () => dispatch({ type: actions.ON_PRESS_TERMS })
    };
  }
)(SignUpPage);
