import { combineReducers } from "redux";
import {
  reducer as authenticationReducer,
  State as AuthenticationState
} from "./reducers/authentication";
import { reducer as errorReducer, State as ErrorState } from "./reducers/error";
import {
  reducer as systemReducer,
  State as SystemState
} from "./reducers/system";
import {
  reducer as trackingReducer,
  State as TrackingState
} from "./reducers/tracking";

export type State = {
  authentication: AuthenticationState;
  error: ErrorState;
  system: SystemState;
  tracking: TrackingState;
};

export default combineReducers({
  authentication: authenticationReducer,
  error: errorReducer,
  system: systemReducer,
  tracking: trackingReducer
});
