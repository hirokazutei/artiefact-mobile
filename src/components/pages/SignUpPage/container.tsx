import { Dispatch } from "redux";
import { connect } from "react-redux";
import { actions } from "../../../redux/reducers/authentication/actionTypes";
import {
  EmailForm,
  PasswordForm,
  UsernameForm
} from "../../../redux/reducers/authentication";
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
  emailValidationStatus: ValidationResultType;
  isButtonDisabled: boolean;
  isUsernameValidating: boolean;
  email: string;
  password: string;
  passwordErrors: Array<string>;
  passwordValidationStatus: ValidationResultType;
  showDatePickerModal: boolean;
  username: string;
  usernameErrors: Array<string>;
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

const extractUsernameVerificationErrorAndStatus = (
  usernameForm: UsernameForm
): { errorMessages: Array<string>; status: ValidationResultType } => {
  const {
    value,
    hasOnlyAllowedChars,
    isAvailable,
    hasLength,
    hideErrors,
    isDirty
  } = usernameForm;
  const errorMessages = [];
  let status = "undefined";
  if (!hideErrors && value) {
    if (!hasLength) {
      errorMessages.push(messages.usernameWrongLength);
    }
    if (!isAvailable) {
      errorMessages.push(messages.usernameUnavailable(value));
    }
    if (!hasOnlyAllowedChars) {
      errorMessages.push(messages.usernameHasIllegalChars);
    }
    status = errorMessages.length ? "error" : "success";
  }
  if (isDirty && !value) {
    errorMessages.push(messages.usernameIsBlank);
    status = "warning";
  }
  return { errorMessages, status: status as ValidationResultType };
};

const extractPasswordVerificationErrorAndStatus = (
  passwordForm: PasswordForm
): { errorMessages: Array<string>; status: ValidationResultType } => {
  const {
    value,
    hasLength,
    hasUpper,
    hasLower,
    hideErrors,
    isDirty
  } = passwordForm;
  const errorMessages = [];
  let status = "undefined";
  if (!hideErrors && value) {
    if (!hasLength) {
      errorMessages.push(messages.passwordWrongLength);
    }
    if (!hasLower || !hasUpper) {
      errorMessages.push(messages.passwordNeedsLowerAndUpper);
    }
    status = errorMessages.length ? "error" : "success";
  }
  if (isDirty && !value) {
    errorMessages.push(messages.passwordIsBlank);
    status = "warning";
  }
  return { errorMessages, status: status as ValidationResultType };
};

const extractEmailVerificationErrorAndStatus = (
  emailForm: EmailForm
): { errorMessages: Array<string>; status: ValidationResultType } => {
  const { value, isValid, hideErrors, isDirty } = emailForm;
  const errorMessages = [];
  let status = "undefined";
  if (!hideErrors && value) {
    if (!isValid) {
      errorMessages.push(messages.emailIsInvalid);
    }
    status = errorMessages.length ? "error" : "success";
  }
  if (isDirty && !value) {
    errorMessages.push(messages.emailIsBlank);
    status = "warning";
  }
  return { errorMessages, status: status as ValidationResultType };
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
    const { value: username, isValidating, isAvailable } = usernameForm;
    const {
      errorMessages: usernameErrors,
      status: usernameValidationStatus
    } = extractUsernameVerificationErrorAndStatus(usernameForm);

    // Password
    const { value: password } = passwordForm;
    const {
      errorMessages: passwordErrors,
      status: passwordValidationStatus
    } = extractPasswordVerificationErrorAndStatus(passwordForm);

    // Email
    const { value: email } = emailForm;
    const {
      errorMessages: emailErrors,
      status: emailValidationStatus
    } = extractEmailVerificationErrorAndStatus(emailForm);

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
      emailValidationStatus,
      isButtonDisabled,
      isUsernameValidating: isValidating,
      password,
      passwordErrors,
      passwordValidationStatus,
      showDatePickerModal,
      username,
      usernameErrors,
      usernameValidationStatus
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
