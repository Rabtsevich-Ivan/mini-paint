import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from './components/SignUpForm/SignUpForm';
import * as Styled from './styled';

const SignUpPage: FC = () => {
  return (
    <Styled.MainForm>
      <Styled.FormWrapper>
        <SignUpForm />
        <Styled.FormReminder>
          Already have an account? <Link to='/login'>Log In</Link>
        </Styled.FormReminder>
      </Styled.FormWrapper>
    </Styled.MainForm>
  );
};

export default SignUpPage;
