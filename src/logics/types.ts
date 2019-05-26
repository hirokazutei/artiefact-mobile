import { ActionTypes } from "./actionTypes";

export type Action = {
  type: ActionTypes;
  error: Object;
};

export type EncompassingErrors = Error | PositionError;
