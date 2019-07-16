import { actions } from "./actionTypes";
import { Action } from "../../redux/types";

export const initizationActionCreator = (): Action => {
  return {
    type: actions.INITIALIZE_APP
  };
};

export default {
  initizationActionCreator
};
