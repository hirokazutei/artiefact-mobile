import { all, fork } from "redux-saga/effects";
import errorSaga from "./logics/error/saga";
import initializationSaga from "./logics/initialization/saga";
import signInSaga from "./useCases/signInUseCase/saga";
import signUpSaga from "./useCases/signUpUseCase/saga";
import validatorSaga from "./logics/validator/saga";

export default function* rootSaga() {
  yield all([
    fork(errorSaga),
    fork(initializationSaga),
    fork(signInSaga),
    fork(signUpSaga),
    fork(validatorSaga),
  ]);
}
