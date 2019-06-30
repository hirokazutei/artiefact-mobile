import { all, fork } from "redux-saga/effects";
import errorSaga from "./logics/error/saga";
import validatorSaga from "./logics/validator/saga";
import signInSaga from "./useCases/signInUseCase/saga";
import signUpSaga from "./useCases/signUpUseCase/saga";

export default function* rootSaga() {
  yield all([
    fork(errorSaga),
    fork(signInSaga),
    fork(signUpSaga),
    fork(validatorSaga)
  ]);
}
