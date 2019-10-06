import { all, put, takeEvery } from "redux-saga/effects";
import actions from "./actions";

function* incrementSaga() {
  console.log("incrementSaga was reached");
  yield put({ type: actions.INCREMENT_STORE });
}

function* decrementSaga() {
  console.log("decrementSaga was reached");
  yield put({ type: actions.DECREMENT_STORE });
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.INCREMENT, incrementSaga),
    takeEvery(actions.DECREMENT, decrementSaga)
  ]);
}
