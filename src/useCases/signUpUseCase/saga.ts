import { select, takeEvery } from "redux-saga/effects";
import AuthClient from "../../interface/artiefact/authentication";
import { actions } from "./actionTypes";
import { signUpSelector } from "../../redux/selectors/authentication";

export function* signUpHandler() {
  const state = yield select();
  const authClient = AuthClient.get();
  const response = yield authClient.signUp(signUpSelector(state));
  console.log(response);
}

export default function* signUpUseCaseSaga() {
  yield takeEvery(actions.SIGN_UP_USE_CASE, signUpHandler);
}
