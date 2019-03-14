import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { Store } from './types';

/**
 * Create Store for the Whole Application
 */
const configureStore = (): Store => {
    return createStore(rootReducer);
}

export default configureStore;
