/* @flow */
import {
  Dispatch as ReduxDispatch,
  Action as ReduxAction,
  Store as ReduxStore,
  AnyAction,
} from "redux";
import { State as ReduxState } from "./rootReducer";

export type Dispatch = ReduxDispatch<ReduxAction>;

export type Dispatcher = { dispatch: Dispatch };

export type Store = ReduxStore<ReduxState, ReduxAction>;

export type State = ReduxState;

export type Action = AnyAction;
