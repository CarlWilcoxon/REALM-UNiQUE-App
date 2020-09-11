import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


// worker Saga: will be fired on "FETCH_PROGRESS" actions
function* getProgress(action) {
  try {

    const response = yield axios.get('/api/progress/get-save',  action.payload );
    yield put({ type: 'SET_PROGRESS', payload: response });

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

  } catch (error) {
    console.log('User get request failed', error);
  }
}



function* progressSaga() {
  yield takeLatest('CREATE_PROGRESS', createProgress);
  yield takeLatest('FETCH_PROGRESS', getProgress);
  yield takeLatest('UPDATE_PROGRESS', updateProgress);
}

export default progressSaga;
