import { actions } from "./actionTypes";
import { Action } from "./types";

export const handleUnknownError = (error: Object): Action => {
  return {
    type: actions.UNKNOWN_ERROR,
    error
  };
};
