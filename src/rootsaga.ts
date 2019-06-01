import { all, fork } from "redux-saga/effects";
import errorSaga from "./logics/error/saga";
import signInSaga from "./useCases/signInUseCase/saga";

export default function* rootSaga() {
  yield all([fork(errorSaga), fork(signInSaga)]);
}
