import { select, takeEvery } from "redux-saga/effects";
import { NavigationActions } from "react-navigation";
import AuthClient from "../../interface/artiefact/authentication";
import TokenManager from "../../managers/Authentication/tokenManager";
import { TokenResponse } from "../../entity/Authentication/Token";
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
    .signUp(signUpSelector(state))
    .then((response: object & { data: TokenResponse }) => {
      return response;
    })
    .catch((error: Error) => {
      errorHandler(error);
    });
  if (response) {
    // TODO, These response data's parsing should be handled by an interface
    const { access_token, artiefact_user } = response.data;
    const tokenObject = TokenManager.createToken(access_token);
    new TokenManager({ tokenObject });
    nav.dispatch(
      NavigationActions.navigate({ routeName: routes.mainStackRoutes.mapStack })
    );
    // TODO: Set user and navigate to map
    console.log(artiefact_user);
  }
}

export default function* signUpUseCaseSaga() {
  yield takeEvery(actions.SIGN_UP_USE_CASE, signUpHandler);
}
