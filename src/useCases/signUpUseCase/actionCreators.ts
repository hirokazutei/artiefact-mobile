import { actions } from "./actionTypes";
import { Action } from "../../redux/types";

export const signUpActionCreator = (): Action => {
  return { type: actions.SIGN_UP_USE_CASE };
};

export default { signUpActionCreator };
