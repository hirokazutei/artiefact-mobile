export type ActionTypes = "SHOW_ERROR_MODAL" | "HIDE_ERROR_MODAL";

export const actions: { [key in ActionTypes]: ActionTypes } = {
  HIDE_ERROR_MODAL: "HIDE_ERROR_MODAL",
  SHOW_ERROR_MODAL: "SHOW_ERROR_MODAL"
};
