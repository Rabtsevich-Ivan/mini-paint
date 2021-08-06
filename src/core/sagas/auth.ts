import { put, takeEvery, call } from '@redux-saga/core/effects';
import { AuthActionTypes } from '../constants/actionTypes';
import { Action as ReduxAction } from 'redux';
import {
  loginSuccess,
  loginFailed,
  signupSuccess,
  signupFailed,
  logout,
} from '../actions/auth';
import { login, signup, logout as authLogout } from '../services/auth';

interface Action<T> extends ReduxAction<T> {
  payload?: any;
}

export function* loginWorker(action: Action<AuthActionTypes>): Generator {
  try {
    alert('start');
    const data = yield call(
      login,
      action.payload.email,
      action.payload.password
    );
    yield put(loginSuccess(data));
  } catch (e) {
    yield put(loginFailed(e.message));
  }
}

export function* signupWorker(action: Action<AuthActionTypes>): Generator {
  try {
    alert('start');
    const data = yield call(
      signup,
      action.payload.email,
      action.payload.password
    );
    alert(data);
    yield put(signupSuccess(data));
  } catch (e) {
    yield put(signupFailed(e.message));
  }
}

function* logoutWorker(): Generator {
  yield call(authLogout);
  return put(logout());
}

export function* authWatcher(): Generator {
  yield takeEvery(AuthActionTypes.LOGIN, loginWorker);
  yield takeEvery(AuthActionTypes.SIGN_UP, signupWorker);
  yield takeEvery(AuthActionTypes.LOGOUT, logoutWorker);
}
