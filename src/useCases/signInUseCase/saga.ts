import { select, takeEvery } from "redux-saga/effects";
import { NavigationActions } from "react-navigation";
import AuthClient from "../../interface/artiefact/authentication";
import { actions } from "./actionTypes";
import { signInSelector } from "../../redux/selectors/authentication";
import TokenManager from "../../managers/Authentication/tokenManager";
import { SignInResponse } from "../../entity/Authentication/responses";
import { errorHandler } from "../../logics/error";
import Navigator from "../../navigation/navigationService";
import ArtiefactError, { errorTypeNames } from "../../entity/Error";
import routes from "../../navigation/routes";

export function* signInHandler() {
  const state = yield select();
  const authClient = AuthClient.get();
  const nav = Navigator.get();
  const response = yield authClient
    .signIn(signInSelector(state))
    .then((response: object & { data: SignInResponse }) => response)
    .catch((error: Error) => {
      // TODO Determine Axios Error and Server Error
      const artiefactError = new ArtiefactError({
        error,
        errorType: errorTypeNames.axiosError
      });
      errorHandler(artiefactError);
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

export default function* signInUseCaseSaga() {
  yield takeEvery(actions.SIGN_IN_USE_CASE, signInHandler);
}
