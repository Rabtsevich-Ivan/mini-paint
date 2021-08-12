import { createSelector } from 'reselect';
import { RootState } from '../reducers';

//Original auth
const selectAuthState = (state: RootState) => state.auth;

export const selectAuthError = createSelector(
  selectAuthState,
  (state) => state.error
);

//From react-redux-firebase
const selectFirebaseState = (state: RootState) => state.firebase;

export const selectFirebaseAuth = createSelector(
  selectFirebaseState,
  (state) => state.auth
);

export const selectFirebaseAuthEmail = createSelector(
  selectFirebaseState,
  (state) => state.auth.email
);
