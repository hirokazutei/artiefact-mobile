import { combineReducers } from "redux";
import {
  reducer as authenticationReducer,
  State as AuthenticationState
} from "./reducers/authentication";
import { reducer as errorReducer, State as ErrorState } from "./reducers/error";

export type State = { authentication: AuthenticationState; error: ErrorState };

export default combineReducers({
  authentication: authenticationReducer,
  error: errorReducer
});
