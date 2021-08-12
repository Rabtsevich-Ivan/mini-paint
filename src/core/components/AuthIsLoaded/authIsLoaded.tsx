import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import { RootState } from '../../reducers';
import { Props } from './types';

export const AuthIsLoaded: FC<Props> = ({ children }) => {
  const auth = useSelector((state: RootState) => state.firebase.auth);
  if (!isLoaded(auth)) return <div>Wait a moment please!</div>;
  return children;
};
