import { State } from "../types";

export const selectIsConnected = (state: State): boolean => {
  return state.system.isConnected;
};
