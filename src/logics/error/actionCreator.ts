import { actions } from "./actionTypes";
import { Action } from "./types";
import { AxiosError } from "axios";

export const handleUnknownError = (error: Error): Action => {
  return {
    type: actions.UNKNOWN_ERROR,
    error
  };
};

export const handleNetworkError = (error: AxiosError): Action => {
  return {
    type: actions.NETWORK_ERROR,
    error: error.response ? error.response.data.type : "Known Network Error"
  };
};
