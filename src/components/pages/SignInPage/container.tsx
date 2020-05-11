import { Dispatch } from "redux";
import { connect } from "react-redux";
import { State } from "../../../redux/rootReducer";
import useCaseActionCreators from "../../../useCases/signInUseCase/actionCreators";
import reduxActionCreators from "../../../redux/reducers/authentication/actionCreators";
import SignInPage from "./component";

type StateProps = {
  password: string;
  username: string;
};

type DispatchProps = {
  onChangeUsername: (event: React.FormEvent<HTMLSelectElement>) => void;
  onChangePassword: (event: React.FormEvent<HTMLSelectElement>) => void;
  onPressSignIn: () => void;
  onPressBack: () => void;
};

export default connect(
  (state: State): StateProps => {
    const { passwordForm, usernameForm } = state.authentication;
    return {
      password: passwordForm.value,
      username: usernameForm.value,
    };
  },
  (dispatch: Dispatch): DispatchProps => {
    return {
      onChangePassword: (event: React.FormEvent<HTMLSelectElement>) => {
        dispatch(reduxActionCreators.changePasswordActionCreator(event));
      },
      onChangeUsername: (event: React.FormEvent<HTMLSelectElement>) => {
        dispatch(reduxActionCreators.changeUsernameActionCreator(event));
      },
      onPressBack: () => {
        dispatch(reduxActionCreators.resetSignInFormActionCreator());
      },
      onPressSignIn: () => {
        dispatch(useCaseActionCreators.signInActionCreator());
      },
    };
  }
)(SignInPage);

export { StateProps, DispatchProps };
