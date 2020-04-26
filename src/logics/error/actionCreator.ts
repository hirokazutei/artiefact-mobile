import { actions } from "./actionTypes";
import { Action } from "../../redux/types";
import { AxiosError } from "axios";

export const handleUnknownErrorActionCreator = (error: Error): Action => {
  return {
    type: actions.UNKNOWN_ERROR,
    error,
  };
};

export const handleNetworkErrorActionCreator = (error: AxiosError): Action => {
  return {
    type: actions.NETWORK_ERROR,
    error: error.response ? error.response.data.type : "Unknown Network Error",
  };
};

export const handlePositionErrorActionCreator = (
  error: PositionError
): Action => {
  return {
    type: actions.POSITION_ERROR,
    error: error.message ? error.message : "Position Error",
  };
};

export default {
  handleUnknownErrorActionCreator,
  handleNetworkErrorActionCreator,
  handlePositionErrorActionCreator,
};
