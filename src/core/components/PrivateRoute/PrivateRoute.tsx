import React, { FC, useState, useEffect } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const PrivateRoute: FC<Props> = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <div></div>;
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
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
