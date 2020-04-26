import { Reducer } from "redux";
import { ActionTypes } from "./actionTypes";

export type State = {
  isTracking: boolean;
  userID?: number;
  sagaID?: number;
  chapterID?: number;
  longitudes: number[];
  latitudes: number[];
};

const defaultState: Readonly<State> = {
  isTracking: false,
  longitudes: [],
  latitudes: [],
};

export type Action = {
  type: ActionTypes;
  payload: { value: any };
};

export const reducer: Reducer<State, Action> = (
  state: State = defaultState,
  action: Action
): State => {
  const newState = { ...state, action };
  return newState;
};
