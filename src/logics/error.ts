import store from "../store";
import { handleUnknownError } from "./actionCreator";
import { EncompassingErrors } from "./types";

export const errorHandler = (error: EncompassingErrors) => {
  console.log(error);
  const { dispatch } = store;
  dispatch(handleUnknownError(error));
};
