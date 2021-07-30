import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase/firebase';
import { signup, login, logout } from '../services/auth';
import { User } from '../interfaces/user';

const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
} 

export const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {
    // auth.onAuthStateChanged return method, which will
    // delete this listener when we unmount this component
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
      }
    });
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
