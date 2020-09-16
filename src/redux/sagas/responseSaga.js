import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "SUBMIT_RESPONSE" actions
function* submitResponse(action) {
  try {
    yield axios.post('/api/answer/add', action.payload);
  } catch (error) {
    console.log('User get request failed', error);
  }
}

// worker Saga: will be fired on "SUBMIT_RESPONSE" actions
function* submitFeedback(action) {
  try {
    yield axios.post('/api/answer/feedback/add', action.payload);
    yield put({ type: 'PROGRESS_COMPLETE', payload: action.payload });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

// worker Saga: will be fired on "UPDATE_RESPONSE" actions
function* updateResponse(action) {
  try {
    yield axios.put('/api/answer/update', action.payload);
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* responseSaga() {
  yield takeLatest('SUBMIT_RESPONSE', submitResponse);
  yield takeLatest('UPDATE_RESPONSE', updateResponse);
  yield takeLatest('SUBMIT_FEEDBACK', submitFeedback);
}

export default responseSaga;
