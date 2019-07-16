import store from "../../store";
import actionCreators from "./actionCreator";
import { EncompassingErrors } from "./types";
import { AxiosError } from "axios";

const instanceOfAxiosError = (error: Error): boolean => {
  return "isAxiosError" in error;
};

export const errorHandler = (error: EncompassingErrors) => {
  const { dispatch } = store;
  if (instanceOfAxiosError(error)) {
    const axiosError = error as AxiosError;
    dispatch(actionCreators.handleNetworkErrorActionCreator(axiosError));
  } else {
    dispatch(actionCreators.handleUnknownErrorActionCreator(error));
  }
};
