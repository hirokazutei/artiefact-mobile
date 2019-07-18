import { select, takeEvery } from "redux-saga/effects";
import { NavigationActions } from "react-navigation";
import AuthClient from "../../interface/artiefact/authentication";
import TokenManager from "../../managers/Authentication/tokenManager";
import { actions } from "./actionTypes";
import { signUpSelector } from "../../redux/selectors/authentication";
import { errorHandler } from "../../logics/error";
import Navigator from "../../navigation/navigationService";
import routes from "../../navigation/routes";

export function* signUpHandler() {
  const state = yield select();
  const authClient = AuthClient.get();
  const nav = Navigator.get();
  const response = yield authClient
    .signIn(signUpSelector(state))
    .then(response => {
      return response;
    })
    .catch(error => {
      errorHandler(error);
    });
  if (response) {
    const { access_token, artiefact_user } = response.data;
    const token = TokenManager.createToken(access_token);
    console.log(token);
    new TokenManager({ token });
    // TODO: Set user and navigate to map
    nav.dispatch(
      NavigationActions.navigate({ routeName: routes.mainStackRoutes.auth })
    );
    console.log(artiefact_user);
  }
}

export default function* signUpUseCaseSaga() {
  yield takeEvery(actions.SIGN_UP_USE_CASE, signUpHandler);
}
