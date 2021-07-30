import React, { FC } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';
import * as Styled from './styled';

const LoginPage: FC = () => {
  return (
    <Styled.MainForm>
      <Styled.FormWrapper>
        <LoginForm />
        <Styled.FormReminder>
          Need an account? <Link to='/signup'>Sign Up</Link>
        </Styled.FormReminder>
      </Styled.FormWrapper>
    </Styled.MainForm>
  );
};

export default LoginPage;
