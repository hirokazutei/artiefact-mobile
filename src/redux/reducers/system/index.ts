import { Reducer } from "redux";
import { ActionTypes, actions } from "./actionTypes";

export type State = {
  isConnected: boolean;
  isListening: boolean;
};

const defaultState: Readonly<State> = {
  isConnected: false,
  isListening: false,
};

export type Action = {
  type: ActionTypes;
  payload: any;
};

export const reducer: Reducer<State, Action> = (
  state: State = defaultState,
  action: Action
): State => {
  const newState = { ...state };
  switch (action.type) {
    case actions.CONNECTION_CHANGE: {
      newState.isConnected = action.payload.isConnected;
      break;
    }
    case actions.CONNECTION_START_LISTENING: {
      newState.isListening = true;
      break;
    }
    case actions.CONNECTION_STOP_LISTENING: {
      newState.isListening = false;
      break;
    }
    default:
      break;
  }
  return newState;
};
