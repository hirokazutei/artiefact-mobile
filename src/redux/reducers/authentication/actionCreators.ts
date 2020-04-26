import { actions } from "./actionTypes";
import { Action } from "../../types";

export const changePasswordActionCreator = (
  event: React.FormEvent<HTMLSelectElement>
): Action => {
  return { type: actions.AUTH_CHANGE_PASSWORD, payload: { value: event } };
};

export const changeUsernameActionCreator = (
  event: React.FormEvent<HTMLSelectElement>
): Action => {
  return { type: actions.AUTH_CHANGE_USERNAME, payload: { value: event } };
};

export const changeEmailActionCreator = (
  event: React.FormEvent<HTMLSelectElement>
): Action => {
  return {
    type: actions.AUTH_CHANGE_EMAIL,
    payload: { value: event },
  };
};

export const hideDatePickerModalActionCreator = (): Action => {
  return { type: actions.AUTH_HIDE_DATE_PICKER_MODAL };
};

export const pickBirthdateActionCreator = (date: Date): Action => {
  return { type: actions.AUTH_ON_PICK_BIRTHDATE, payload: { value: date } };
};

export const showDatePickerModalActionCreator = (): Action => {
  return { type: actions.AUTH_SHOW_DATE_PICKER_MODAL };
};

export const onPressTermsActionCreator = (): Action => {
  return { type: actions.AUTH_ON_PRESS_TERMS };
};

export const resetSignUpFormActionCreator = (): Action => {
  return { type: actions.AUTH_RESET_SIGN_UP_FORM };
};

export const resetSignInFormActionCreator = (): Action => {
  return { type: actions.AUTH_RESET_SIGN_IN_FORM };
};

export default {
  changePasswordActionCreator,
  changeUsernameActionCreator,
  changeEmailActionCreator,
  hideDatePickerModalActionCreator,
  pickBirthdateActionCreator,
  showDatePickerModalActionCreator,
  onPressTermsActionCreator,
  resetSignUpFormActionCreator,
  resetSignInFormActionCreator,
};
