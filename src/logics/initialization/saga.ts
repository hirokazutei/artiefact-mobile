import { put, takeEvery } from "redux-saga/effects";
import { NavigationActions } from "react-navigation";
import TokenManager from "../../managers/Authentication/tokenManager";
import AuthClient from "../../interface/artiefact/authentication";
import { actions } from "./actionTypes";
import routes from "../../navigation/routes";

function* initializationHandler() {
  const token = yield TokenManager.loadAccessToken()
    .then(token => {
      return token;
    })
    .catch(error => {
      console.log(error);
      return null;
    });
  console.log(token);
  if (token && token.expiryDatetime < new Date()) {
    const authClient = AuthClient.get();
    const response = yield authClient
      .getUser({ bearerToken: `bearer${token.token}` })
      .then(response => {
        return response;
      })
      .catch(error => {
        console.log(error);
        return null;
      });
    if (response) {
      // parse that response
      const { artiefact_user } = response.data;
      put(artiefact_user);
      yield put(
        NavigationActions.navigate({
          routeName: routes.mainStackRoutes.mapStack
        })
      );
    }
    return;
  }
  yield put(
    NavigationActions.navigate({ routeName: routes.mainStackRoutes.auth })
  );
}

function* initializationSaga() {
  yield takeEvery(actions.INITIALIZE_APP, initializationHandler);
}

export default initializationSaga;
