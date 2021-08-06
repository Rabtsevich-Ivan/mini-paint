import React, { FC, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import HomePage from './pages/Home/HomePage';
import PaintPage from './pages/Paint/PaintPage';
import LoginPage from './pages/Auth/Login/LoginPage';
import SignUpPage from './pages/Auth/SignUp/SignUpPage';
import PrivateRoute from './core/components/PrivateRoute/PrivateRoute';
import { useSelector } from 'react-redux';

import { auth } from './core/firebase/firebase';
import { useDispatch } from 'react-redux';
import { isAuth } from './core/actions/auth';
import { isLoaded } from 'react-redux-firebase';

const App: FC = () => {
  // const user = useSelector((state: any) => state.auth.data);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       dispatch(isAuth(user));
  //     }
  //   });
  // }, []);

  function AuthIsLoaded({ children }: any) {
    const auth = useSelector((state: any) => state.firebase.auth);
    if (!isLoaded(auth)) return <div>Wait a moment please!</div>;
    return children;
  }

  return (
    <>
      <AuthIsLoaded>
        <BrowserRouter>
          <Switch>
            <Route exact path='/signup' component={SignUpPage} />
            <Route exact path='/login' component={LoginPage} />
            <PrivateRoute exact path='/paint' component={PaintPage} />
            <PrivateRoute exact path='/' component={HomePage} />
          </Switch>
        </BrowserRouter>
      </AuthIsLoaded>
    </>
  );
};

export default App;
