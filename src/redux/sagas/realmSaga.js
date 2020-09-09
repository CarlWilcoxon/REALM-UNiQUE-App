import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* getAllRealms() {
  try {
    const response = yield axios.get("/api/realm/all");
    yield put({ type: "SET_ALL_REALMS", payload: response.data });
    console.log('test console:',response.data);
  } catch (error) {
    console.log("Error with GET:", error);
  }
}

function* realmSaga() {
  yield takeLatest("FETCH_ALL_REALMS", getAllRealms);
}

export default realmSaga;
