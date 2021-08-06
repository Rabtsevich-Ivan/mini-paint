import { AuthActionTypes } from '../constants/actionTypes';

interface State {
  data: object;
  isLoading: boolean;
  error: string;
  logStatus: any;
}

const initialState: State = {
  data: null,
  isLoading: false,
  error: null,
  logStatus: null,
};

const auth = (
  state = initialState,
  { type, payload }: { type: string; payload: any }
): State => {
  switch (type) {
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        data: payload.data,
        isLoading: false,
        error: null,
      };
    case AuthActionTypes.LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
        data: payload.data,
      };
    case AuthActionTypes.SIGN_UP:
      return {
        ...state,
        isLoading: true,
      };
    case AuthActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        data: payload.data,
        isLoading: false,
        error: null,
      };
    case AuthActionTypes.SIGN_UP_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    case AuthActionTypes.ISLOGGEDIN:
      return {
        ...state,
        logStatus: payload.user,
      };
    case AuthActionTypes.LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default auth;
