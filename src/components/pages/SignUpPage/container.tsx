import { Dispatch } from "redux";
import { connect } from "react-redux";
import { actions } from "../../../redux/reducers/authentication/actionTypes";
import { State } from "../../../redux/rootReducer";
import { actions as validationActions } from "../../../logics/validator/actionTypes";
import { actions as signUpActions } from "../../../useCases/signUpUseCase/actionTypes";
import { ValidationResultType } from "../../molecules/ValidationField";
import SignUpPage from "./component";
import messages from "./messages";

export type StateProps = {
  agreeToTerms: boolean;
  birthday?: Date;
  changedBirthday: boolean;
  emailErrors: Array<string>;
  isButtonDisabled: boolean;
  isUsernameValidating: boolean;
  email: string;
  username: string;
  usernameErrors: Array<string>;
  showDatePickerModal: boolean;
  password: string;
  passwordErrors: Array<string>;
  usernameValidationStatus: ValidationResultType;
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
      agreeToTermsForm,
      birthdayForm,
      emailForm,
      passwordForm,
      showDatePickerModal,
      usernameForm
    } = state.authentication;

    // Username
    const {
      value: username,
      isValidating,
      hasOnlyAllowedChars,
      isAvailable,
      hasLength: usernameHasLength,
      hideErrors: usernameHideErrors,
      isDirty: usernameIsDirty
    } = usernameForm;
    const usernameErrors = [];
    let usernameValidationStatus = "undefined";
    if (!usernameHideErrors && username) {
      if (!usernameHasLength) {
        usernameErrors.push(messages.usernameWrongLength);
      }
      if (!isAvailable) {
        usernameErrors.push(messages.usernameUnavailable(username));
      }
      if (!hasOnlyAllowedChars) {
        usernameErrors.push(messages.usernameHasIllegalChars);
      }
    }
    if (usernameIsDirty && !username) {
      usernameErrors.push(messages.usernameIsBlank);
    }
    // TODO: Change the ugly icons
    usernameValidationStatus = usernameErrors.length ? "error" : "success";

    // Password
    const {
      value: password,
      hasLength: passwordHasLength,
      hasUpper,
      hasLower,
      hideErrors: passwordHideErrors,
      isDirty: passwordIsDirty
    } = passwordForm;
    const passwordErrors = [];
    if (!passwordHideErrors && password) {
      if (!passwordHasLength) {
        passwordErrors.push(messages.passwordWrongLength);
      }
      if (!hasLower || !hasUpper) {
        passwordErrors.push(messages.passwordNeedsLowerAndUpper);
      }
    }
    if (passwordIsDirty && !password) {
      passwordErrors.push(messages.passwordIsBlank);
    }

    // Email
    const {
      value: email,
      isValid: isEmailValid,
      hideErrors: emailHideErrors,
      isDirty: emailIsDirty
    } = emailForm;
    const emailErrors = [];
    if (!emailHideErrors && email) {
      if (!isEmailValid) {
        emailErrors.push(messages.emailIsInvalid);
      }
    }
    if (emailIsDirty && !email) {
      emailErrors.push(messages.emailIsBlank);
    }

    const isButtonDisabled =
      !agreeToTermsForm.value ||
      !birthdayForm.isDirty ||
      !birthdayForm.value ||
      !email ||
      !password ||
      !username ||
      !!emailErrors.length ||
      !!usernameErrors.length ||
      !!passwordErrors.length ||
      isValidating ||
      !isAvailable;
    return {
      agreeToTerms: agreeToTermsForm.value,
      birthday: birthdayForm.value,
      changedBirthday: birthdayForm.isDirty,
      email,
      emailErrors,
      isButtonDisabled,
      isUsernameValidating: isValidating,
      password,
      passwordErrors,
      showDatePickerModal,
      username,
      usernameErrors,
      usernameValidationStatus: usernameValidationStatus as ValidationResultType
    };
  },
  (dispatch: Dispatch): DispatchProps => {
    return {
      onChangePassword: (event: React.FormEvent<HTMLSelectElement>) => {
        dispatch({
          type: actions.AUTH_CHANGE_PASSWORD,
          payload: { value: event }
        });
        dispatch({
          type: validationActions.DELAYED_PASSWORD_VALIDATION
        });
      },
      onChangeUsername: (event: React.FormEvent<HTMLSelectElement>) => {
        dispatch({
          type: actions.AUTH_CHANGE_USERNAME,
          payload: { value: event }
        });
        dispatch({
          type: validationActions.CHECK_USERNAME_AVAILABILITY
        });
        dispatch({
          type: validationActions.DELAYED_USERNAME_VALIDATION
        });
      },
      onChangeEmail: (event: React.FormEvent<HTMLSelectElement>) => {
        dispatch({
          type: actions.AUTH_CHANGE_EMAIL,
          payload: { value: event }
        });
        dispatch({
          type: validationActions.DELAYED_EMAIL_VALIDATION
        });
      },
      onPressCancelModal: () => {
        dispatch({
          type: actions.AUTH_HIDE_DATE_PICKER_MODAL
        });
      },
      onPressConfirmModal: (date: Date) => {
        dispatch({
          type: actions.AUTH_ON_PICK_BIRTHDATE,
          payload: { value: date }
        });
      },
      onPressSetBirthday: () =>
        dispatch({
          type: actions.AUTH_SHOW_DATE_PICKER_MODAL
        }),
      onPressSignUp: () => {
        dispatch({
          type: signUpActions.SIGN_UP_USE_CASE
        });
      },
      onPressTerms: () => dispatch({ type: actions.AUTH_ON_PRESS_TERMS })
    };
  }
)(SignUpPage);
