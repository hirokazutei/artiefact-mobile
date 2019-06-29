import store from "../../store";
import { handleUnknownError, handleNetworkError } from "./actionCreator";
import { EncompassingErrors } from "./types";
import { AxiosError } from "axios";

const instanceOfAxiosError = (error: Error): boolean => {
  return "isAxiosError" in error;
};

export const errorHandler = (error: EncompassingErrors) => {
  const { dispatch } = store;
  if (instanceOfAxiosError(error)) {
    const axiosError = error as AxiosError;
    dispatch(handleNetworkError(axiosError));
  } else {
    dispatch(handleUnknownError(error));
  }
};
