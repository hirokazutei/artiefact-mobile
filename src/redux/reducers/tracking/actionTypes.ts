export type ActionTypes = "UPDATE_CURRENT_REGION" | "UPDATE_REGION_VIEW";

export const actions: { [key in ActionTypes]: ActionTypes } = {
  UPDATE_CURRENT_REGION: "UPDATE_CURRENT_REGION",
  UPDATE_REGION_VIEW: "UPDATE_REGION_VIEW"
};
