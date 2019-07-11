import { actions } from "./actionTypes";
import { Action } from "./types";
import { AxiosError } from "axios";

export const handleUnknownErrorActionCreator = (error: Error): Action => {
  return {
    type: actions.UNKNOWN_ERROR,
    error
  };
};

export const handleNetworkErrorActionCreator = (error: AxiosError): Action => {
  return {
    type: actions.NETWORK_ERROR,
    error: error.response ? error.response.data.type : "Unknown Network Error"
  };
};

export default {
  handleUnknownErrorActionCreator,
  handleNetworkErrorActionCreator
};
