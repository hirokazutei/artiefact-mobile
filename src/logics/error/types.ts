import { ActionTypes } from "./actionTypes";
import { AxiosError } from "axios";

export type Action = {
  type: ActionTypes;
  error: Object;
};

export type EncompassingErrors = Error | AxiosError;
