export type ActionTypes =
  | "CHANGE_PASSWORD"
  | "CHANGE_USERNAME"
  | "ON_PRESS_TERMS";

export const actions: { [key in ActionTypes]: ActionTypes } = {
  CHANGE_PASSWORD: "CHANGE_PASSWORD",
  CHANGE_USERNAME: "CHANGE_USERNAME",
  ON_PRESS_TERMS: "ON_PRESS_TERMS"
};
