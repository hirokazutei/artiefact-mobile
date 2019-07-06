import { actions } from "../../redux/reducers/system/actionTypes";
import { Action } from "../../redux/types";

export const connectionChangeAction = (isConnected: boolean): Action => {
  return {
    type: actions.CONNECTION_CHANGE,
    payload: { isConnected }
  };
};

export const startListeningConnectionAction = (): Action => {
  return { type: actions.CONNECTION_START_LISTENING };
};

export const stopListeningConnectionAction = (): Action => {
  return { type: actions.CONNECTION_STOP_LISTENING };
};

export default {
  connectionChangeAction,
  startListeningConnectionAction,
  stopListeningConnectionAction
};
