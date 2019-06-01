import { takeEvery } from "redux-saga/effects";
import { actions } from "./actionTypes";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* handleError() {
  console.log("SUP");
}

function* errorSaga() {
  yield takeEvery(actions.UNKNOWN_ERROR, handleError);
}

export default errorSaga;
