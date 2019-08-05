import { Reducer } from "redux";
import { ActionTypes, actions } from "./actionTypes";
import { Region } from "react-native-maps";

export type State = {
  currentRegion?: Region;
};

const defaultState: Readonly<State> = {};

export type Action = {
  type: ActionTypes;
  payload: any;
};

export const reducer: Reducer<State, Action> = (
  state: State = defaultState,
  action: Action
): State => {
  const newState = { ...state };
  const { type, payload } = action;
  switch (type) {
    case actions.UPDATE_CURRENT_REGION: {
      newState.currentRegion = payload.region;
      break;
    }
    default: {
      break;
    }
  }
  return newState;
};
