import React from 'react';
import firebase from 'firebase/app';
import "firebase/auth";
import { auth } from './firebase';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import PaintPage from './pages/paint/PaintPage'
import LoginPage from './pages/Auth/Login/LoginPage';
import SignUpPage from './pages/Auth/SignUp/SignUpPage';
import { AuthProvider } from './core/contexts/AuthContext';
import PrivateRoute from './core/components/PrivateRoute/PrivateRoute';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/signup' component={SignUpPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/paint' component={PaintPage} />
          <PrivateRoute exact path='/' component={HomePage} /> 
          {/*<Redirect to='/login' />*/}
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
