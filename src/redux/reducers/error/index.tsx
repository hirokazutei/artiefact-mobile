import { Reducer } from "redux";
import { ActionTypes, actions } from "./actionTypes";

export type State = {
  showErrorModal: boolean;
  errorMessage: string;
};

const defaultState: Readonly<State> = {
  showErrorModal: false,
  errorMessage: ""
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
    case actions.SHOW_ERROR_MODAL: {
      newState.showErrorModal = true;
      newState.errorMessage = action.payload;
      break;
    }
    case actions.HIDE_ERROR_MODAL: {
      newState.showErrorModal = false;
      break;
    }
    default:
      break;
  }
  return newState;
};
