import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { Props } from './types';
import { selectFirebaseAuth } from '../../selectors/auth';

const PrivateRoute: FC<Props> = ({ component: Component, ...rest }) => {
  const auth = useSelector(selectFirebaseAuth);

  return (
    <Route
      {...rest}
      render={(props) => {
        return isLoaded(auth) && !isEmpty(auth) ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        );
      }}
    ></Route>
  );
};

export default PrivateRoute;
