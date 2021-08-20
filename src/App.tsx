import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'firebase/auth';
import HomePage from './pages/Home/HomePage';
import PaintPage from './pages/Paint/PaintPage';
import LoginPage from './pages/Auth/Login/LoginPage';
import SignUpPage from './pages/Auth/SignUp/SignUpPage';
import PrivateRoute from './core/components/PrivateRoute/PrivateRoute';
import { AuthIsLoaded } from './core/components/AuthIsLoaded/authIsLoaded';
import { AppRoutes } from './core/constants/appRoutes';
import { Toaster } from 'react-hot-toast';
import { TOAST_OPTIONS } from './core/constants/toastOptions';
import Modal from './core/components/Modal/Modal';

const App: FC = () => {
  return (
    <>
      <AuthIsLoaded>
        <BrowserRouter>
          <Toaster toastOptions={TOAST_OPTIONS} />
          <Modal />
          <Switch>
            <Route exact path={AppRoutes.SignUp} component={SignUpPage} />
            <Route exact path={AppRoutes.Login} component={LoginPage} />
            <PrivateRoute exact path={AppRoutes.Paint} component={PaintPage} />
            <PrivateRoute exact path={AppRoutes.Home} component={HomePage} />
          </Switch>
        </BrowserRouter>
      </AuthIsLoaded>
    </>
  );
};

export default App;
