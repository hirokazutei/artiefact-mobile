import { Dispatch } from "redux";
import { connect } from "react-redux";
import { actions } from "../../../redux/reducers/authentication/actionTypes";
import { State } from "../../../redux/rootReducer";
import { actions as signUpActions } from "../../../useCases/signUpUseCase/actionTypes";
import {
  usernameValidator,
  passwordValidator,
  emailValidator
} from "../../../logics/validator/authentication";
import SignUpPage from "./component";

export type StateProps = {
  agreeToTerms: boolean;
  birthday?: Date;
  changedBirthday: boolean;
  emailErrors: Array<string>;
  isButtonDisabled: boolean;
  email: string;
  username: string;
  usernameErrors: Array<string>;
  showDatePickerModal: boolean;
  password: string;
  passwordErrors: Array<string>;
};

export type DispatchProps = {
  onChangeEmail: (event: React.FormEvent<HTMLSelectElement>) => void;
  onChangeUsername: (event: React.FormEvent<HTMLSelectElement>) => void;
  onChangePassword: (event: React.FormEvent<HTMLSelectElement>) => void;
  onPressCancelModal: () => void;
  onPressConfirmModal: (date: Date) => void;
  onPressSetBirthday: () => void;
  onPressSignUp: () => void;
  onPressTerms: () => void;
};

export default connect(
  (state: State): StateProps => {
    const {
      agreeToTerms,
      birthday,
      changedBirthday,
      email,
      password,
      showDatePickerModal,
      username
    } = state.authentication;
    const usernameErrors = [];
    if (username) {
      const usernameValidationResult = usernameValidator(username);
      if (!usernameValidationResult.hasLength) {
        usernameErrors.push("Username must be between 4 to 24 characters.");
      }
      if (!usernameValidationResult.hasOnlyAllowedChars) {
        usernameErrors.push(
          "Username only permits alphabets, numbers and the following characters: _+=-"
        );
      }
    }
    const passwordErrors = [];
    if (password) {
      const passwordValidationResult = passwordValidator(password);
      if (!passwordValidationResult.hasLength) {
        passwordErrors.push("Password must be between 8 to 32 characters.");
      }
      /* This condion might be too intense.
      if (
        !passwordValidationResult.hasUpper ||
        !passwordValidationResult.hasLower ||
        !passwordValidationResult.hasNumber ||
        !passwordValidationResult.hasSpecial
      ) {
        passwordErrors.push(
          "Password must contain at least one uppercase letter, one lowercase letter, one number and one of the following characters: * @ ! # % & ( ) ^ ~ { }"
        );
      }
      */
    }
    const emailErrors = [];
    if (email) {
      const emailValidationResult = emailValidator(email);
      if (!emailValidationResult.valid) {
        emailErrors.push("The e-mail address provided is not valid");
      }
    }
    const isButtonDisabled =
      !agreeToTerms ||
      !changedBirthday ||
      !birthday ||
      !email ||
      !password ||
      !username ||
      !!emailErrors.length ||
      !!usernameErrors.length ||
      !!passwordErrors.length;
    return {
      agreeToTerms,
      birthday,
      changedBirthday,
      email,
      emailErrors,
      isButtonDisabled,
      password,
      passwordErrors,
      showDatePickerModal,
      username,
      usernameErrors
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
      onPressCancelModal: () => {
        dispatch({
          type: actions.HIDE_DATE_PICKER_MODAL
        });
      },
      onPressConfirmModal: (date: Date) => {
        dispatch({
          type: actions.ON_PICK_DATE,
          payload: { value: date }
        });
      },
      onPressSetBirthday: () =>
        dispatch({
          type: actions.SHOW_DATE_PICKER_MODAL
        }),
      onPressSignUp: () => {
        dispatch({
          type: signUpActions.SIGN_UP_USE_CASE
        });
      },
      onPressTerms: () => dispatch({ type: actions.ON_PRESS_TERMS })
    };
  }
)(SignUpPage);
