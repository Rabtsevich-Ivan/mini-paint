import { Action } from '../interfaces/action';
import firebase from 'firebase';
import { UserCredential } from '@firebase/auth-types';

export enum AuthActionTypes {
  LOGIN = '[Auth] LOGIN',
  LOGIN_SUCCESS = '[Auth] LOGIN_SUCCESS',
  LOGIN_FAILED = '[Auth] LOGIN_FAILED',
  SIGN_UP = '[Auth] SIGN_UP',
  SIGN_UP_SUCCESS = '[Auth] SIGN_UP_SUCCESS',
  SIGN_UP_FAILED = '[Auth] SIGN_UP_FAILED',
  LOGOUT = '[Auth] LOGOUT',
}

export const login = (
  email: string,
  password: string
): Action<AuthActionTypes> => ({
  type: AuthActionTypes.LOGIN,
  payload: { email, password },
});

export const loginSuccess = (data: firebase.User): Action<AuthActionTypes> => ({
  type: AuthActionTypes.LOGIN_SUCCESS,
  payload: { data },
});

export const loginFailed = (error: string): Action<AuthActionTypes> => ({
  type: AuthActionTypes.LOGIN_FAILED,
  payload: { error },
});

export const signup = (
  email: string,
  password: string
): Action<AuthActionTypes> => ({
  type: AuthActionTypes.SIGN_UP,
  payload: { email, password },
});

export const signupSuccess = (
  data: UserCredential
): Action<AuthActionTypes> => ({
  type: AuthActionTypes.SIGN_UP_SUCCESS,
  payload: { data },
});

export const signupFailed = (error: string): Action<AuthActionTypes> => ({
  type: AuthActionTypes.SIGN_UP_FAILED,
  payload: { error },
});

export const logout = (): Action<AuthActionTypes> => ({
  type: AuthActionTypes.LOGOUT,
  payload: undefined,
});
