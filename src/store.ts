import { Action, Store } from "redux";
import configureStore from "./redux/configureStore";
import { sagaMiddleware } from "./redux/configureStore";
import rootSaga from "./rootsaga";

const store: Store<Object, Action> = configureStore();

sagaMiddleware.run(rootSaga);

export default store;
