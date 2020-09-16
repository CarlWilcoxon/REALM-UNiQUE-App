import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// this get calls  takes care of getting curriculum from the database
function* getCurriculum(action) {
  try {
    const response = yield axios.get(`/api/statistic/get/curriculum`);

    yield put({ type: 'SET_STATISTICS', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

// this get calls  takes care of getting demographics from the database
function* getDemographics(action) {
  try {
    const response = yield axios.get(`/api/statistic/get/demographics`);

    yield put({ type: 'SET_STATISTICS', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}
// this get calls  takes care of getting user feedback from the database
function* getFeedback(action) {
  try {
    const response = yield axios.get(`/api/statistic/get/feedback`);

    yield put({ type: 'SET_STATISTICS', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* realmSaga() {
  yield takeLatest('FETCH_CURRICULUM', getCurriculum);
  yield takeLatest('FETCH_DEMOGRAPHICS', getDemographics);
  yield takeLatest('FETCH_FEEDBACK', getFeedback);
}

export default realmSaga;
