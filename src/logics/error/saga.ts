import { put, takeEvery } from "redux-saga/effects";
import { Action } from "../../redux/types";
import { actions } from "./actionTypes";
import { actions as reduxActions } from "../../redux/reducers/error/actionTypes";

function* handleError(actions: Action) {
  yield put({ type: reduxActions.SHOW_ERROR_MODAL, payload: actions.error });
}

function* errorSaga() {
  yield takeEvery([actions.UNKNOWN_ERROR, actions.NETWORK_ERROR], handleError);
}

export default errorSaga;
