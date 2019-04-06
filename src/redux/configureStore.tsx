import { createStore, Store, AnyAction } from "redux";
import rootReducer from "./rootReducer";

/**
 * Create Store for the Whole Application
 */
const configureStore: () => Store<Object, AnyAction> = (): Store => {
  return createStore(rootReducer);
};

export default configureStore;
