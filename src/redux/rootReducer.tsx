import { combineReducers } from 'redux'
import { accountReducer } from '../logics/account/reduser';

export default combineReducers({ account: accountReducer })