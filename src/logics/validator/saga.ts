import { all, delay, select, put, takeLatest } from "redux-saga/effects";
import { actions } from "./actionTypes";
import { actions as reduxActions } from "../../redux/reducers/authentication/actionTypes";
import AuthClient from "../../interface/artiefact/authentication";
import { errorHandler } from "../error";
import {
  usernameSelector,
  emailSelector,
  passwordSelector
} from "../../redux/selectors/authentication";
import {
  emailValidator,
  passwordValidator,
  usernameValidator
} from "./authentication";

const VALIDATION_WAIT_PERIOD = 1000;

function* checkUsernameAvailabilityhandler() {
  const state = yield select();
  const username = usernameSelector(state);
  const usernameValidationResult = usernameValidator(username);
  if (
    usernameValidationResult.hasLength &&
    usernameValidationResult.hasOnlyAllowedChars
  ) {
    yield put({
      type: reduxActions.AUTH_USERNAME_IS_VALIDATING,
      payload: { isValidating: true }
    });
    const authClient = AuthClient.get();
    const response = yield authClient
      .checkUsernameAvailability({ username })
      .then(response => {
        return response;
      })
      .catch(error => {
        errorHandler(error);
      });
    const isAvailable = response && response.data && response.data.is_available;
    yield put({
      type: reduxActions.AUTH_USERNAME_AVAILABLE,
      payload: { isAvailable: !!isAvailable }
    });
    return;
  }
  yield put({
    type: reduxActions.AUTH_USERNAME_IS_VALIDATING,
    payload: { isValidating: false }
  });
}

function* delayedEmailValidationHandler() {
  const state = yield select();
  const email = emailSelector(state);
  if (email) {
    const emailValidationResult = emailValidator(email);
    if (!emailValidationResult.valid) {
      yield delay(VALIDATION_WAIT_PERIOD);
    }
    yield put({
      type: reduxActions.AUTH_EMAIL_VALIDATION,
      payload: { isValid: emailValidationResult.valid }
    });
  }
}

function* delayedUsernameValidationHandler() {
  const state = yield select();
  const username = usernameSelector(state);
  if (username) {
    const usernameValidationResult = usernameValidator(username);
    const { hasLength, hasOnlyAllowedChars } = usernameValidationResult;
    if (!hasLength && !hasOnlyAllowedChars) {
      yield delay(VALIDATION_WAIT_PERIOD);
    }
    yield put({
      type: reduxActions.AUTH_USERNAME_VALIDATION,
      payload: { hasLength, hasOnlyAllowedChars }
    });
  }
}

function* delayedPasswordValidationHandler() {
  const state = yield select();
  const password = passwordSelector(state);
  if (password) {
    const passwordValidationResult = passwordValidator(password);
    const { hasLength, hasLower, hasUpper } = passwordValidationResult;
    if (!hasLength && !hasLower && !hasUpper) {
      yield delay(VALIDATION_WAIT_PERIOD);
    }
    yield put({
      type: reduxActions.AUTH_PASSWORD_VALIDATION,
      payload: { hasLength, hasLower, hasUpper }
    });
  }
}

export default function* validatorSaga() {
  yield all([
    yield takeLatest(
      actions.CHECK_USERNAME_AVAILABILITY,
      checkUsernameAvailabilityhandler
    ),
    yield takeLatest(
      actions.DELAYED_EMAIL_VALIDATION,
      delayedEmailValidationHandler
    ),
    yield takeLatest(
      actions.DELAYED_PASSWORD_VALIDATION,
      delayedPasswordValidationHandler
    ),
    yield takeLatest(
      actions.DELAYED_USERNAME_VALIDATION,
      delayedUsernameValidationHandler
    )
  ]);
}
