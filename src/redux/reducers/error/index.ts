import { Reducer } from "redux";
import { ActionTypes, actions } from "./actionTypes";
import { IconTypeKey } from "../../../components/atoms/Icon/const";

export type State = {
  icon?: IconTypeKey;
  showModal: boolean;
  message: string;
};

const defaultState: Readonly<State> = {
  icon: undefined,
  showModal: false,
  message: "",
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
      newState.showModal = true;
      newState.message = action.payload.message;
      newState.icon = action.payload.icon;
      break;
    }
    case actions.HIDE_ERROR_MODAL: {
      newState.showModal = false;
      break;
    }
    default:
      break;
  }
  return newState;
};
