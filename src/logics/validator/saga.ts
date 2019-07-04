import { select, put, takeLatest } from "redux-saga/effects";
import { actions } from "./actionTypes";
import { actions as reduxActions } from "../../redux/reducers/authentication/actionTypes";
import AuthClient from "../../interface/artiefact/authentication";
import { errorHandler } from "../error";
import { checkUsernameAvailabilitySelector } from "../../redux/selectors/authentication";
import { usernameValidator } from "./authentication";

function* checkUsernameAvailabilityhandler() {
  const state = yield select();
  const username = checkUsernameAvailabilitySelector(state).username;
  const usernameValidationResult = usernameValidator(username);
  if (
    usernameValidationResult.hasLength &&
    usernameValidationResult.hasOnlyAllowedChars
  ) {
    yield put({
      type: reduxActions.USERNAME_IS_VALIDATING
    });
    const authClient = AuthClient.get();
    const response = yield authClient
      .checkUsernameAvailability({ username })
      .then(response => {
        console.log(response);
        return response;
      })
      .catch(error => {
        errorHandler(error);
      });
    if (response && response.data && response.data.is_available) {
      yield put({ type: reduxActions.USERNAME_AVAILABLE });
    } else {
      yield put({ type: reduxActions.USERNAME_UNAVAILABLE });
    }
  }
}

export default function* validatorSaga() {
  yield takeLatest(
    actions.CHECK_USERNAME_AVAILABILITY,
    checkUsernameAvailabilityhandler
  );
}
