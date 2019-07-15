import { put, takeEvery } from "redux-saga/effects";
import { Action } from "../../redux/types";
import { actions } from "./actionTypes";
import { actions as reduxActions } from "../../redux/reducers/error/actionTypes";

// TODO: Separate errors appropriately
function* errorHandler(actions: Action) {
  yield put({
    type: reduxActions.SHOW_ERROR_MODAL,
    payload: { message: actions.error, icon: "noConnection" }
  });
}

function* errorSaga() {
  yield takeEvery([actions.UNKNOWN_ERROR, actions.NETWORK_ERROR], errorHandler);
}

export default errorSaga;
