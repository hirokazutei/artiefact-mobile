/* @flow */
import {
  Dispatch as ReduxDispatch,
  Action,
  Store as ReduxStore,
  AnyAction
} from "redux";
import { State as ReduxState } from "./rootReducer";

export type Dispatch = ReduxDispatch<Action>;

export type Dispatcher = { dispatch: Dispatch };

export type Store = ReduxStore<ReduxState, Action>;

export type State = ReduxState;

export type Action = AnyAction;
