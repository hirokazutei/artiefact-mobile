import { ActionTypes } from "./actionTypes";
import {PositionError} from "react-native-maps";

export type Action = {
  type: ActionTypes;
  error: Object;
};

export type EncompassingErrors = Error | PositionError;
