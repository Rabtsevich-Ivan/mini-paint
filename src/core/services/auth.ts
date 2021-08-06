import { auth } from '../firebase/firebase';

export const signup = (email: string, password: string): Promise<any> => {
  return auth.createUserWithEmailAndPassword(email, password);
};

export const login = (email: string, password: string): Promise<any> => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const logout = (): Promise<void> => auth.signOut();
