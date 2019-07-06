import { Dispatch } from "redux";
import { connect } from "react-redux";
import { State } from "../../../redux/rootReducer";
import { actions as signInActions } from "../../../useCases/signInUseCase/actionTypes";
import { actions } from "../../../redux/reducers/authentication/actionTypes";
import SignInPage from "./component";

export type StateProps = {
  password: string;
  username: string;
};

export type DispatchProps = {
  onChangeUsername: (event: React.FormEvent<HTMLSelectElement>) => void;
  onChangePassword: (event: React.FormEvent<HTMLSelectElement>) => void;
  onPressSignIn: () => void;
};

export default connect(
  (state: State): StateProps => {
    const { passwordForm, usernameForm } = state.authentication;
    return {
      password: passwordForm.value,
      username: usernameForm.value
    };
  },
  (dispatch: Dispatch): DispatchProps => {
    return {
      onChangePassword: (event: React.FormEvent<HTMLSelectElement>) => {
        dispatch({
          type: actions.AUTH_CHANGE_PASSWORD,
          payload: { value: event }
        });
      },
      onChangeUsername: (event: React.FormEvent<HTMLSelectElement>) => {
        dispatch({
          type: actions.AUTH_CHANGE_USERNAME,
          payload: { value: event }
        });
      },
      onPressSignIn: () => {
        dispatch({
          type: signInActions.SIGN_IN_USE_CASE
        });
      }
    };
  }
)(SignInPage);
