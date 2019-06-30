import { Reducer } from "redux";
import { ActionTypes, actions } from "./actionTypes";

export type State = {
  agreeToTerms: boolean;
  agreeToTermsDate?: Date;
  birthday: Date;
  changedBirthday: boolean;
  email: string;
  password: string;
  showDatePickerModal: boolean;
  username: string;
  isUsernameValidating: boolean;
  isUsernameAvailable: boolean | null;
};

const defaultState: Readonly<State> = {
  agreeToTerms: false,
  birthday: new Date(),
  changedBirthday: false,
  email: "",
  password: "",
  showDatePickerModal: false,
  username: "",
  isUsernameValidating: false,
  isUsernameAvailable: null
};

export type Action = {
  type: ActionTypes;
  payload: { value: any };
};

export const reducer: Reducer<State, Action> = (
  state: State = defaultState,
  action: Action
): State => {
  const newState = { ...state };
  switch (action.type) {
    case actions.CHANGE_EMAIL: {
      newState.email = action.payload.value;
      break;
    }
    case actions.CHANGE_USERNAME: {
      newState.username = action.payload.value;
      break;
    }
    case actions.CHANGE_PASSWORD: {
      newState.password = action.payload.value;
      break;
    }
    case actions.ON_PRESS_TERMS: {
      newState.agreeToTerms = !newState.agreeToTerms;
      newState.agreeToTermsDate = new Date();
      break;
    }
    case actions.SHOW_DATE_PICKER_MODAL: {
      newState.showDatePickerModal = true;
      break;
    }
    case actions.HIDE_DATE_PICKER_MODAL: {
      newState.showDatePickerModal = false;
      break;
    }
    case actions.ON_PICK_DATE: {
      newState.birthday = action.payload.value;
      newState.showDatePickerModal = false;
      newState.changedBirthday = true;
      break;
    }
    case actions.USERNAME_IS_VALIDATING: {
      newState.isUsernameValidating = true;
      break;
    }
    case actions.USERNAME_AVAILABLE: {
      newState.isUsernameAvailable = true;
      break;
    }
    case actions.USERNAME_UNAVAILABLE: {
      newState.isUsernameAvailable = false;
      break;
    }
    case actions.RESET_SIGNIN_FORM: {
      return { ...defaultState };
    }
    case actions.RESET_SIGNUP_FORM: {
      return { ...defaultState };
    }
    default:
      break;
  }
  return newState;
};
