import { AuthActionTypes } from './../actions/auth';
import { Action } from '../interfaces/action';
import { User } from './../interfaces/user';
import firebase from 'firebase';
import { UserCredential } from '@firebase/auth-types';

export interface AuthState {
  data: User | firebase.User | UserCredential;
  isLoading: boolean;
  error: null | string;
}

const initialState: AuthState = {
  data: null,
  isLoading: false,
  error: null,
};

const auth = (
  state = initialState,
  action: Action<AuthActionTypes>
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        error: null,
      };

    case AuthActionTypes.LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case AuthActionTypes.SIGN_UP:
      return {
        ...state,
        isLoading: true,
      };
    case AuthActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        error: null,
      };
    case AuthActionTypes.SIGN_UP_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case AuthActionTypes.LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default auth;
