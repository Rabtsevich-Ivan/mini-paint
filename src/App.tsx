import React, { FC } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import "firebase/auth";
import { AuthProvider } from './core/contexts/AuthContext';
import HomePage from './pages/Home/HomePage';
import PaintPage from './pages/Paint/PaintPage'
import LoginPage from './pages/Auth/Login/LoginPage';
import SignUpPage from './pages/Auth/SignUp/SignUpPage';
import PrivateRoute from './core/components/PrivateRoute/PrivateRoute';
import './App.css';


const App: FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/signup' component={SignUpPage} />
          <Route exact path='/login' component={LoginPage} />
          <PrivateRoute exact path='/paint' component={PaintPage} /> 
          <PrivateRoute exact path='/' component={HomePage} /> 
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
