export type ActionTypes =
  | "CHANGE_PASSWORD"
  | "CHANGE_USERNAME"
  | "CHANGE_EMAIL"
  | "ON_PICK_DATE"
  | "ON_PRESS_SIGNUP"
  | "ON_PRESS_SIGNIN"
  | "ON_PRESS_TERMS"
  | "HIDE_DATE_PICKER_MODAL"
  | "SHOW_DATE_PICKER_MODAL";

export const actions: { [key in ActionTypes]: ActionTypes } = {
  CHANGE_PASSWORD: "CHANGE_PASSWORD",
  CHANGE_USERNAME: "CHANGE_USERNAME",
  CHANGE_EMAIL: "CHANGE_EMAIL",
  ON_PICK_DATE: "ON_PICK_DATE",
  HIDE_DATE_PICKER_MODAL: "HIDE_DATE_PICKER_MODAL",
  ON_PRESS_SIGNIN: "ON_PRESS_SIGNIN",
  ON_PRESS_SIGNUP: "ON_PRESS_SIGNUP",
  ON_PRESS_TERMS: "ON_PRESS_TERMS",
  SHOW_DATE_PICKER_MODAL: "SHOW_DATE_PICKER_MODAL"
};