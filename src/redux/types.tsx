/* @flow */
import { Dispatch as ReduxDispatch, Store as ReduxStore, } from 'redux';


export interface Action {
    error?: boolean,
    meta?: Object,
    payload?: any,
    type: string
};

export type Dispatch = ReduxDispatch<Action>;

export type State = Object

export type ReduxStore = Object

export type Store = ReduxStore<State, Action>;