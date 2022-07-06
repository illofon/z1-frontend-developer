import { all, fork } from "redux-saga/effects";
import verificationSaga from "./verificationSaga/verificationSaga";

export function* rootSaga() {
  yield all([fork(verificationSaga)]);
}
