import { actions } from "./actionTypes";
import { Action } from "../../types";

export const hideErrorModalActionCreator = (): Action => {
  return { type: actions.HIDE_ERROR_MODAL };
};

export default {
  hideErrorModalActionCreator,
};
