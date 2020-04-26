export type ActionTypes = "UNKNOWN_ERROR" | "NETWORK_ERROR" | "POSITION_ERROR";

export const actions: { [key in ActionTypes]: ActionTypes } = {
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
  NETWORK_ERROR: "NETWORK_ERROR",
  POSITION_ERROR: "POSITION_ERROR",
};
