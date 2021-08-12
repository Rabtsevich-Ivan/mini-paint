export enum ImagesActionTypes {
  FETCH_IMAGES = 'FETCH_IMAGES',
  FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS',
  FETCH_IMAGES_FAILED = 'FETCH_IMAGES_FAILED',
}

export enum AuthActionTypes {
  LOGIN = '[Auth] LOGIN',
  LOGIN_SUCCESS = '[Auth] LOGIN_SUCCESS',
  LOGIN_FAILED = '[Auth] LOGIN_FAILED',
  SIGN_UP = '[Auth] SIGN_UP',
  SIGN_UP_SUCCESS = '[Auth] SIGN_UP_SUCCESS',
  SIGN_UP_FAILED = '[Auth] SIGN_UP_FAILED',
  LOGOUT = '[Auth] LOGOUT',
}

export enum ModalActionTypes {
  SHOWMODAL = '[Modal] SHOWMODAL',
  CLOSEMODAL = '[Modal] CLOSEMODAL',
}
