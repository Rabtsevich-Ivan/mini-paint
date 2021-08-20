import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from './components/SignUpForm/SignUpForm';
import * as Styled from './styled';
import { User } from './../../../core/interfaces/user';
import { useDispatch } from 'react-redux';
import { signup } from './../../../core/actions/auth';

const SignUpPage: FC = () => {
  const dispatch = useDispatch();
  // Submit Handler
  const onSubmit = (data: User): void => {
    dispatch(signup(data.email, data.password));
  };

  return (
    <Styled.MainForm>
      <Styled.FormWrapper>
        <SignUpForm onSubmit={onSubmit} />
        <Styled.FormReminder>
          Already have an account? <Link to='/login'>Log In</Link>
        </Styled.FormReminder>
      </Styled.FormWrapper>
    </Styled.MainForm>
  );
};

export default SignUpPage;
