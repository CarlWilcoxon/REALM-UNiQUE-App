import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// function* getCurriculum() {
//   try {
//     const response = yield axios.get('/api/statistic/curriculum');
//     yield put({ type: 'SET_ALL_STATS', payload: response.data });
//     console.log('test console:', response.data);
//   } catch (error) {
//     console.log('Error with GET:', error);
//   }
// }

function* getCurriculum(action) {
  try {
    const response = yield axios.get(`/api/statistic/get/curriculum`);

    yield put({ type: 'SET_STATISTICS', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}
function* getDemographics(action) {
  try {
    const response = yield axios.get(`/api/statistic/get/demographics`);

    yield put({ type: 'SET_STATISTICS', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}
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
