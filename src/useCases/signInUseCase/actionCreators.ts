import { actions } from "./actionTypes";
import { Action } from "../../redux/types";

export const signInActionCreator = (): Action => {
  return { type: actions.SIGN_IN_USE_CASE };
};

export default { signInActionCreator };
