import { actions } from "../../redux/reducers/system/actionTypes";
import { Action } from "../../redux/types";

export const connectionChangeActionCreator = (isConnected: boolean): Action => {
  return {
    type: actions.CONNECTION_CHANGE,
    payload: { isConnected }
  };
};

export const startListeningConnectionActionCreator = (): Action => {
  return { type: actions.CONNECTION_START_LISTENING };
};

export const stopListeningConnectionActionCreator = (): Action => {
  return { type: actions.CONNECTION_STOP_LISTENING };
};

export default {
  connectionChangeActionCreator,
  startListeningConnectionActionCreator,
  stopListeningConnectionActionCreator
};
