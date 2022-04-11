import {all} from "redux-saga/effects"
import sagas from "./watch-actions"

export default function* rootSaga() {
  yield all([
    sagas()
  ])
}
