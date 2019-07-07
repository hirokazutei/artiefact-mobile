import { Reducer } from "redux";
import { ActionTypes, actions } from "./actionTypes";

type AgreeToTermsForm = {
  value: boolean;
  date?: Date;
  isDirty: boolean;
};

type BirthdayForm = {
  value: Date;
  isDirty: boolean;
};

export type EmailForm = {
  value: string;
  isDirty: boolean;
  isValid?: boolean;
  hideErrors: boolean;
};

export type PasswordForm = {
  value: string;
  isDirty: boolean;
  hasLength?: boolean;
  hasLower?: boolean;
  hasUpper?: boolean;
  hideErrors: boolean;
};

export type UsernameForm = {
  value: string;
  isDirty: boolean;
  hasLength?: boolean;
  hasOnlyAllowedChars?: boolean;
  isValidating: boolean;
  isAvailable: boolean | null;
  hideErrors: boolean;
};

export type State = {
  agreeToTermsForm: AgreeToTermsForm;
  birthdayForm: BirthdayForm;
  emailForm: EmailForm;
  passwordForm: PasswordForm;
  usernameForm: UsernameForm;
  showDatePickerModal: boolean;
};

const defaultState: Readonly<State> = {
  agreeToTermsForm: { value: false, isDirty: false },
  birthdayForm: { value: new Date(), isDirty: false },
  emailForm: { value: "", isDirty: false, hideErrors: true },
  passwordForm: { value: "", isDirty: false, hideErrors: true },
  usernameForm: {
    value: "",
    isDirty: false,
    isValidating: false,
    isAvailable: null,
    hideErrors: true
  },
  showDatePickerModal: false
};

export type Action = {
  type: ActionTypes;
  payload: any;
};

export const reducer: Reducer<State, Action> = (
  state: State = defaultState,
  action: Action
): State => {
  const newState = { ...state };
  const { type, payload } = action;
  switch (type) {
    // Email Form
    case actions.AUTH_CHANGE_EMAIL: {
      newState.emailForm = {
        ...state.emailForm,
        value: payload.value,
        isDirty: true
      };
      break;
    }
    case actions.AUTH_EMAIL_VALIDATION: {
      newState.emailForm = {
        ...state.emailForm,
        isValid: payload.isValid,
        hideErrors: false
      };
      break;
    }
    // Username Form
    case actions.AUTH_CHANGE_USERNAME: {
      newState.usernameForm = {
        ...state.usernameForm,
        value: payload.value,
        isDirty: true
      };
      break;
    }
    case actions.AUTH_USERNAME_VALIDATION: {
      newState.usernameForm = {
        ...state.usernameForm,
        hasLength: payload.hasLength,
        hasOnlyAllowedChars: payload.hasOnlyAllowedChars,
        hideErrors: false
      };

      break;
    }
    case actions.AUTH_USERNAME_IS_VALIDATING: {
      newState.usernameForm = {
        ...state.usernameForm,
        isValidating: payload.isValidating,
        isAvailable: true
      };
      break;
    }
    case actions.AUTH_USERNAME_AVAILABLE: {
      newState.usernameForm = {
        ...state.usernameForm,
        isValidating: false,
        isAvailable: payload.isAvailable,
        hideErrors: false
      };
      break;
    }
    // Password Form
    case actions.AUTH_CHANGE_PASSWORD: {
      newState.passwordForm = {
        ...state.passwordForm,
        value: payload.value,
        isDirty: true
      };
      break;
    }
    case actions.AUTH_PASSWORD_VALIDATION: {
      newState.passwordForm = {
        ...state.passwordForm,
        hasLength: payload.hasLength,
        hasLower: payload.hasLower,
        hasUpper: payload.hasUpper,
        hideErrors: false
      };
      break;
    }
    // AgreeToTerms Form
    case actions.AUTH_ON_PRESS_TERMS: {
      newState.agreeToTermsForm = {
        value: !state.agreeToTermsForm.value,
        date: new Date(),
        isDirty: true
      };
      break;
    }
    // Birthday Form
    case actions.AUTH_ON_PICK_BIRTHDATE: {
      newState.birthdayForm = { value: payload.value, isDirty: true };
      newState.showDatePickerModal = false;
      break;
    }
    case actions.AUTH_SHOW_DATE_PICKER_MODAL: {
      newState.showDatePickerModal = true;
      break;
    }
    case actions.AUTH_HIDE_DATE_PICKER_MODAL: {
      newState.showDatePickerModal = false;
      break;
    }
    // Reset
    case actions.AUTH_RESET_SIGNIN_FORM: {
      return { ...defaultState };
    }
    case actions.AUTH_RESET_SIGNUP_FORM: {
      return { ...defaultState };
    }
    default:
      break;
  }
  return newState;
};
