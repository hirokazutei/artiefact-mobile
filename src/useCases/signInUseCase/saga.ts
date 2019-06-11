import { select, takeEvery } from "redux-saga/effects";
import AuthClient from "../../interface/artiefact/authentication";
import { actions } from "./actionTypes";
import { signInSelector } from "../../redux/selectors/authentication";

export function* signInHandler() {
  const state = yield select();
  const authClient = AuthClient.get();
  const response = yield authClient.signIn(signInSelector(state));
  console.log(response);
}

export default function* signInUseCaseSaga() {
  yield takeEvery(actions.SIGN_IN_USE_CASE, signInHandler);
}
