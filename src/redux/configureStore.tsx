import { applyMiddleware, createStore, Store, AnyAction } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";

export const sagaMiddleware = createSagaMiddleware();

/**
 * Create Store for the Whole Application
 */
const configureStore: () => Store<Object, AnyAction> = (): Store => {
  return createStore(rootReducer, applyMiddleware(sagaMiddleware));
};

export default configureStore;
