import { Action, Store } from "redux";
import configureStore from "./redux/configureStore";
import { sagaMiddleware } from "./redux/configureStore";
import mySaga from "./logics/saga";

const store: Store<Object, Action> = configureStore();

sagaMiddleware.run(mySaga);

export default store;
