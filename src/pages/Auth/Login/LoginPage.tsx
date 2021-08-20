import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import * as Styled from './styled';
import { login } from './../../../core/actions/auth';
import { useDispatch } from 'react-redux';
import { User } from './../../../core/interfaces/user';

const LoginPage: FC = () => {
  const dispatch = useDispatch();

  // Submit Handler
  const onSubmit = (data: User): void => {
    dispatch(login(data.email, data.password));
  };

  return (
    <Styled.MainForm>
      <Styled.FormWrapper>
        <LoginForm onSubmit={onSubmit} />
        <Styled.FormReminder>
          Need an account? <Link to='/signup'>Sign Up</Link>
        </Styled.FormReminder>
      </Styled.FormWrapper>
    </Styled.MainForm>
  );
};

export default LoginPage;
