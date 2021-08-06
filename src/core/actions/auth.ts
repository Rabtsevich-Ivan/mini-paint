import { Action } from 'redux';
import { AuthActionTypes } from '../constants/actionTypes';

export const isAuth = (user: any) => ({
  type: AuthActionTypes.ISLOGGEDIN,
  payload: { user },
});

export const login = (email: string, password: string) => ({
  type: AuthActionTypes.LOGIN,
  payload: { email, password },
});

export const loginSuccess = (data: any) => ({
  type: AuthActionTypes.LOGIN_SUCCESS,
  payload: { data },
});

export const loginFailed = (error: string) => ({
  type: AuthActionTypes.LOGIN_FAILED,
  payload: { error },
});

export const signup = (email: string, password: string) => ({
  type: AuthActionTypes.SIGN_UP,
  payload: { email, password },
});

export const signupSuccess = (data: any) => ({
  type: AuthActionTypes.SIGN_UP_SUCCESS,
  payload: { data },
});

export const signupFailed = (error: string) => ({
  type: AuthActionTypes.SIGN_UP_FAILED,
  payload: { error },
});

export const logout = () => ({
  type: AuthActionTypes.LOGOUT,
});
