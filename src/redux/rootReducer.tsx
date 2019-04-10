import { combineReducers } from "redux";
import {
  reducer as authenticationReducer,
  State as AuthenticationState
} from "./reducers/authentication";

export type State = { authentication: AuthenticationState };

export default combineReducers({ authentication: authenticationReducer });
