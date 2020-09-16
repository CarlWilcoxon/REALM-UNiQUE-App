import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import allSections from './allSectionsReducer';
import section from './sectionReducer';
import allRealms from './allRealmsReducer';
import newQuestions from './newQuestionReducer';
import realm from './realmReducer';
import chosenSections from './chosenSectionsReducer';
import progress from './progressReducer';
import responses from './responsesReducer';
import statistics from './statisticReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  allSections, //will contain info of all sections
  allRealms, //will contain info of all realms
  section, //will contain the info about what section the user is currently in.
  newQuestions, //will contain info for new questions before they are POSTed
  realm, //holds realm before POSTed
  chosenSections, //holds chosen sections for a given realm before they are POSTed
  progress, //holds the users progress in their current realm
  responses, // holds users saved responses
  statistics, // holds site data
});

export default rootReducer;
