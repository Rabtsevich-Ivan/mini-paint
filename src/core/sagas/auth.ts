import {
  put,
  call,
  SagaReturnType,
  takeLatest,
} from '@redux-saga/core/effects';
import { AuthActionTypes } from './../actions/auth';
import {
  loginSuccess,
  loginFailed,
  signupSuccess,
  signupFailed,
  logout,
} from '../actions/auth';
import { login, signup, logout as authLogout } from '../services/auth';
import firebase from 'firebase';
import { Action } from '../interfaces/action';

function* loginWorker(action: Action<AuthActionTypes>) {
  try {
    //SagaReturnType<typeof login> Can't be used here
    //because it returns Promise<UserCredential>, but I need the result of the call
    //which is firebase.User
    const data: firebase.User = yield call(
      login,
      action.payload.email,
      action.payload.password
    );
    yield put(loginSuccess(data));
  } catch (e) {
    yield put(loginFailed(e.message));
  }
}

function* signupWorker(action: Action<AuthActionTypes>) {
  try {
    const data: SagaReturnType<typeof signup> = yield call(
      signup,
      action.payload.email,
      action.payload.password
    );
    yield put(signupSuccess(data));
  } catch (e) {
    yield put(signupFailed(e.message));
  }
}

function* logoutWorker() {
  yield call(authLogout);
  return put(logout());
}

export function* authWatcher(): Generator {
  yield takeLatest(AuthActionTypes.LOGIN, loginWorker);
  yield takeLatest(AuthActionTypes.SIGN_UP, signupWorker);
  yield takeLatest(AuthActionTypes.LOGOUT, logoutWorker);
}
