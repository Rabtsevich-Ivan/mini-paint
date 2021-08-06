import React, { FC, useState, useEffect } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';

const PrivateRoute: FC<Props> = ({ component: Component, ...rest }) => {
  //const logStatus = useSelector((state: any) => state.auth.logStatus);
  const auth = useSelector((state: any) => state.firebase.auth)

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

interface Props extends RouteProps {
  component: any;
}

export default PrivateRoute;
