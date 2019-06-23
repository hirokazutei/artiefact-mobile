/* @flow */
import {
  Dispatch as ReduxDispatch,
  Action,
  Store as ReduxStore,
  AnyAction
} from "redux";

export type Dispatch = ReduxDispatch<Action>;

export type Dispatcher = { dispatch: Dispatch };

export type State = Object;

export type Store = ReduxStore<State, Action>;

export type Action = AnyAction;
