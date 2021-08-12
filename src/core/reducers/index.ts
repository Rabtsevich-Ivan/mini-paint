import { combineReducers } from 'redux';
import { DataState } from '../interfaces/states';
import { AuthState } from '../interfaces/states';
import { ModalState } from '../interfaces/states';
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
