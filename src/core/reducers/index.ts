import { combineReducers } from 'redux';
import images from './data';
import auth from './auth';
import modal from './modal';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  images,
  auth,
  modal,
  firebase: firebaseReducer,
});

export default rootReducer;
