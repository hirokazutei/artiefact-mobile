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
  email: string;
  username: string;
  password: string;
};

type DispatchProps = {
  onChangeEmail: (event: React.FormEvent<HTMLSelectElement>) => void;
  onChangeUsername: (event: React.FormEvent<HTMLSelectElement>) => void;
  onChangePassword: (event: React.FormEvent<HTMLSelectElement>) => void;
  onPressSignUp: () => void;
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
    const { agreeToTerms, email, password, username } = state.authentication;
    const isButtonDisabled = !agreeToTerms || !email || !password || !username;
    return {
      agreeToTerms,
      email,
      isButtonDisabled,
      password,
      username
    };
  },
  (dispatch: Dispatch): DispatchProps => {
    return {
      onChangePassword: (event: React.FormEvent<HTMLSelectElement>) => {
        dispatch({
          type: actions.CHANGE_PASSWORD,
          payload: { value: event }
        });
      },
      onChangeUsername: (event: React.FormEvent<HTMLSelectElement>) => {
        dispatch({
          type: actions.CHANGE_USERNAME,
          payload: { value: event }
        });
      },
      onChangeEmail: (event: React.FormEvent<HTMLSelectElement>) => {
        dispatch({
          type: actions.CHANGE_EMAIL,
          payload: { value: event }
        });
      },
      onPressSignUp: () => dispatch({ type: actions.ON_PRESS_SIGNUP }),
      onPressTerms: () => dispatch({ type: actions.ON_PRESS_TERMS })
    };
  }
)(SignUpPage);
