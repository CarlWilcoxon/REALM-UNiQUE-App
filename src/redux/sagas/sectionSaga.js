import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* submitSection(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    yield axios.post('/api/section/add', action.payload, config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in

    // yield put({ type: '', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* getAllSections() {
  try {
    const response = yield axios.get('/api/section/all');
    yield put({ type: 'SET_ALL_SECTIONS', payload: response.data });
    // console.log('test console:',response.data);
  } catch (error) {
    console.log('Error with GET:', error);
  }
}

function* getSection(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get(
      `/api/section/get-section/${action.payload.sectionId}`,
      config
    );

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in

    yield put({ type: 'SET_SECTION', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}
function* deleteSection(action) {
  try {
    // const response =
    yield axios.delete(`/api/section/${action.payload}`);
    console.log('response from /api/section delete', action.payload);
    //call refresh of Get Data list
    yield put({ type: 'FETCH_ALL_SECTIONS' });
  } catch (error) {
    console.log('Error with user logout:', error);
    console.log('response from /api/tasks delete', action);
  }
}

function* sectionSaga() {
  yield takeLatest('SUBMIT_SECTION', submitSection);
  yield takeLatest('FETCH_ALL_SECTIONS', getAllSections);
  yield takeLatest('DELETE_SECTION', deleteSection);
  yield takeLatest('FETCH_SECTION', getSection);
}

export default sectionSaga;
