import { User } from './user';
import firebase from 'firebase';
import { UserCredential } from '@firebase/auth-types';

export interface AuthState {
  data: User | firebase.User | UserCredential;
  isLoading: boolean;
  error: null | string;
}

import { Image } from './image';

export interface DataState {
  images: Image[];
  isLoading: boolean;
  error: string;
}

export interface ModalState {
  modal: boolean;
}
