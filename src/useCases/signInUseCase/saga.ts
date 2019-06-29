import { select, takeEvery } from "redux-saga/effects";
import AuthClient from "../../interface/artiefact/authentication";
import { actions } from "./actionTypes";
import { signInSelector } from "../../redux/selectors/authentication";
import TokenManager from "../../managers/Authentication/tokenManager";
import { errorHandler } from "../../logics/error";

export function* signInHandler() {
  const state = yield select();
  const authClient = AuthClient.get();
  const response = yield authClient
    .signIn(signInSelector(state))
    .then(response => {
      return response;
    })
    .catch(error => {
      errorHandler(error);
    });
  if (response) {
    const { access_token, artiefact_user } = response.data;
    const token = TokenManager.createToken(access_token);
    new TokenManager({ token });
    console.log(artiefact_user);
  }
}

export default function* signInUseCaseSaga() {
  yield takeEvery(actions.SIGN_IN_USE_CASE, signInHandler);
}
