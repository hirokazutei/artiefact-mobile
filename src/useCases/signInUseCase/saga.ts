import { call, select, takeEvery } from "redux-saga/effects";
import { signIn } from "../../domain/artifact";
import { actions } from "./actionTypes";
import { loginSelector } from "../../redux/selectors/authentication";

export function* signInHandler() {
  console.log("Sagaing");
  const state = yield select();
  const response = yield signIn(loginSelector(state));
  console.log(response);
}

export default function* signInUseCaseSaga() {
  yield takeEvery(actions.SIGN_IN_USE_CASE, signInHandler);
}
