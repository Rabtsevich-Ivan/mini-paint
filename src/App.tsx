import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'firebase/auth';
import HomePage from './pages/Home/HomePage';
import PaintPage from './pages/Paint/PaintPage';
import LoginPage from './pages/Auth/Login/LoginPage';
import SignUpPage from './pages/Auth/SignUp/SignUpPage';
import PrivateRoute from './core/components/PrivateRoute/PrivateRoute';
import { AuthIsLoaded } from './core/components/AuthIsLoaded/authIsLoaded';

const App: FC = () => {
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
