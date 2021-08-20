import { combineReducers } from 'redux';
import { DataState } from './data';
import { AuthState } from './auth';
import { ModalState } from './modal';
import auth from './auth';
import images from './data';
import modal from './modal';
import { firebaseReducer, FirebaseReducer } from 'react-redux-firebase';

export interface RootState {
  firebase: FirebaseReducer.Reducer;
  images: DataState;
  auth: AuthState;
  modal: ModalState;
}

const rootReducer = combineReducers<RootState>({
  images,
  auth,
  modal,
  firebase: firebaseReducer,
});

export default rootReducer;
