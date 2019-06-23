import { Dispatch } from "redux";
import { connect } from "react-redux";
import { State } from "../../../redux/rootReducer";
import { actions as signInActions } from "../../../useCases/signInUseCase/actionTypes";
import { actions } from "../../../redux/reducers/authentication/actionTypes";
import SignInPage from "./component";

type StateProps = {
  password: string;
  username: string;
};

type DispatchProps = {
  onChangeUsername: (event: React.FormEvent<HTMLSelectElement>) => void;
  onChangePassword: (event: React.FormEvent<HTMLSelectElement>) => void;
  onPressSignIn: () => void;
};

export type Props = StateProps & DispatchProps;

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
      },
      onPressSignIn: () => {
        dispatch({
          type: signInActions.SIGN_IN_USE_CASE
        });
      }
    };
  }
)(SignInPage);
