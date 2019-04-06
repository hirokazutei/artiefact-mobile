/* @flow */
import { Dispatch, Action, Store as ReduxStore } from "redux";

export type Dispatcher = Dispatch;

export type State = Object;

export type Store = ReduxStore<State, Action>;
