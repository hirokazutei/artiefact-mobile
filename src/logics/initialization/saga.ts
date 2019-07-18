import { delay, put, takeEvery } from "redux-saga/effects";
import { NavigationActions } from "react-navigation";
import TokenManager from "../../managers/Authentication/tokenManager";
import AuthClient from "../../interface/artiefact/authentication";
import { actions } from "./actionTypes";
import routes from "../../navigation/routes";
import Navigator from "../../navigation/navigationService";

function* initializationHandler() {
  const token = yield TokenManager.loadAccessToken()
    .then(token => {
      return token;
    })
    .catch(error => {
      console.log(error);
      return null;
    });

  /* Why Navigator.get() does not work if put at the top of initializationHandler()
  Refs fire immediately after components are mounted, but not before processes in the constructor or
  ComponentDidMount lifecycle of the InitializationPage so the setTopLevelNavigator() gets pushed back in the queue,
  thus when the SagaAction fires and if you try to Navigator.get() immediately, setTopLevelNavigator() hasn't run.
  So if you delay getting the navigator even 1ms to push the task back, it gets behind setTopLevelNavigator and works perfectly fine.
  */

  /* Why turning setTopLevelNavigator() and navigator as a module level function and variable works.
  If the navigator was just a module-level variable, what it references to gets updated before you use it to navigate (null -> navigatorRef)
  */

  const nav = Navigator.get();
  console.log(token);
  console.log(token.expiryDatetime);
  if (token && token.expiryDatetime && token.expiryDatetime < new Date()) {
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
      // TODO
      const { artiefact_user } = response.data;
      put(artiefact_user);
      NavigationActions.navigate({
        routeName: routes.mainStackRoutes.mapStack
      });
    }
    return;
  }
  // NOTE: Intentionally making it take 2sec to see initialization screen
  yield delay(2000);
  nav.dispatch(
    NavigationActions.navigate({ routeName: routes.mainStackRoutes.auth })
  );
}

function* initializationSaga() {
  yield takeEvery(actions.INITIALIZE_APP, initializationHandler);
}

export default initializationSaga;
