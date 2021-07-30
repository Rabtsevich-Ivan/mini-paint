import { auth } from '../firebase/firebase';
import { User } from '../interfaces/user';

export const signup = (email: string, password: string): Promise<any> => {
  return auth.createUserWithEmailAndPassword(email, password);
};

export const login = (email: string, password: string): Promise<any> => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const logout = (): Promise<any> => {
  return auth.signOut();
};
