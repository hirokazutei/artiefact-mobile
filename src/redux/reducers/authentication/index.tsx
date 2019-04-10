import { Reducer } from "redux";
import { ActionTypes, actions } from "./actionTypes";

export type State = {
  agreeToTerms: boolean;
  password: string;
  username: string;
};

const defaultState: Readonly<State> = {
  agreeToTerms: false,
  password: "",
  username: ""
};

export type Action = {
  type: ActionTypes;
  payload: { value: string };
};

export const reducer: Reducer<State, Action> = (
  state: State = defaultState,
  action: Action
): State => {
  const newState = { ...state };
  console.log(action);
  switch (action.type) {
    case actions.CHANGE_USERNAME: {
      newState.username = action.payload.value;
      break;
    }
    case actions.CHANGE_PASSWORD: {
      newState.password = action.payload.value;
      break;
    }
    case actions.ON_PRESS_TERMS: {
      console.log("H");
      newState.agreeToTerms = !newState.agreeToTerms;
      break;
    }
    default:
      break;
  }
  return newState;
};
