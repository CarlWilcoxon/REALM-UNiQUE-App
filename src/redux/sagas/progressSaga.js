import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


// worker Saga: will be fired on "FETCH_PROGRESS" actions
function* getProgress(action) {
  try {

    const response = yield axios.get(`/api/progress/get-save/${action.payload.realmId}`);
    yield put({ type: 'SET_PROGRESS', payload: response.data });

  } catch (error) {
    console.log('User get request failed', error );
  }
}

// worker Saga: will be fired on "CREATE_PROGRESS" actions
function* createProgress(action) {
  try {

    yield axios.post('/api/progress/create-save',  action.payload);

  } catch (error) {
    console.log('User get request failed', error);
  }
}

// worker Saga: will be fired on "UPDATE_PROGRESS" actions
function* updateProgress(action) {
  try {

    yield axios.put('/api/progress/update-save',  action.payload);
    yield put({ type: 'FETCH_PROGRESS', payload: action.payload });

  } catch (error) {
    console.log('User get request failed', error);
  }
}

// worker Saga: will be fired on "UPDATE_PROGRESS" actions
function* completeProgress(action) {
  try {

    yield axios.put('/api/progress/update-save/completed',  action.payload);

  } catch (error) {
    console.log('User get request failed', error);
  }
}

// worker Saga: will be fired on "UPDATE_PROGRESS" actions
function* updateFormProgress(action) {
  try {

    yield axios.put('/api/progress/update-form',  action.payload);
    yield put({ type: 'FETCH_PROGRESS', payload: action.payload });

  } catch (error) {
    console.log('User get request failed', error);
  }
}



function* progressSaga() {
  yield takeLatest('CREATE_PROGRESS', createProgress);
  yield takeLatest('FETCH_PROGRESS', getProgress);
  yield takeLatest('UPDATE_PROGRESS', updateProgress);
  yield takeLatest('FORM_FINISHED', updateFormProgress);
  yield takeLatest('PROGRESS_COMPLETE', completeProgress);
}

export default progressSaga;
