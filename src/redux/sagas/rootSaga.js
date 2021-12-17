import { all } from "redux-saga/effects";
import { gameSagaWatcher } from "./gameSaga";

function* rootSaga() {
  yield all([gameSagaWatcher()]);
}

export default rootSaga;
