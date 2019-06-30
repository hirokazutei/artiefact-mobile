import { Dispatch } from "redux";
import { connect } from "react-redux";
import { State } from "../../../redux/rootReducer";
import { actions as signInActions } from "../../../useCases/signInUseCase/actionTypes";
import { actions as validationActions } from "../../../logics/validator/actionTypes";
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
    const { password, username } = state.authentication;
    return {
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
        dispatch({
          type: validationActions.CHECK_USERNAME_AVAILABILITY
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
