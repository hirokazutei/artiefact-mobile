import { actions } from "./actionTypes";
import { Action } from "../../types";
import { Region } from "react-native-maps";

export const updateCurrentRegionActionCreator = (region: Region): Action => {
  return { type: actions.UPDATE_CURRENT_REGION, payload: { region } };
};

export const updateRegionViewActionCreator = (region: Region): Action => {
  return { type: actions.UPDATE_REGION_VIEW, payload: { region } };
};

export default {
  updateCurrentRegionActionCreator,
  updateRegionViewActionCreator
};
