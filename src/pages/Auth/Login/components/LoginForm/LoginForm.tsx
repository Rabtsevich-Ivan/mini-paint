import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useSelector } from 'react-redux';
import {
  FormTitle,
  FormGroup,
  FormError,
  FormGroupLabel,
  FormControl,
} from './../../../styled';
import { Inputs } from '../../../../../core/interfaces/inputs';
import Button from '../../../../../core/components/Buttons/Button';
import { selectAuthError } from '../../../../../core/selectors/auth';
import { auth } from '../../../../../core/firebase/firebase';
import { AuthProps } from '../../../types';

export const LoginForm: FC<AuthProps> = ({ onSubmit }) => {
  const history = useHistory();
  const errorStatus = useSelector(selectAuthError);

  // Useform library
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        history.push('/');
      }
    });
  }, []);

  const handleError = ({ message }: { message: string }) => (
    <FormError>{message}</FormError>
  );

  return (
    <form action='' onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>Login Form</FormTitle>
      <FormGroup>
        <FormGroupLabel htmlFor='email'>Enter your email</FormGroupLabel>
        <FormControl
          {...register('email', { required: 'Email is required' })}
          name='email'
          id='email'
          type='email'
          placeholder='Enter email'
        />
        <ErrorMessage errors={errors} name='email' render={handleError} />
      </FormGroup>

      <FormGroup>
        <FormGroupLabel htmlFor='password'>Enter your Password</FormGroupLabel>
        <FormControl
          {...register('password', { required: 'Password is required ' })}
          name='password'
          id='password'
          type='password'
        />
        <ErrorMessage errors={errors} name='password' render={handleError} />
      </FormGroup>
      {errorStatus && (
        <FormError id='sub-error'>Incorrect email or password</FormError>
      )}

      <Button btnType='formBtn' as='input' type='submit' value='Log in' />
    </form>
  );
};

export default LoginForm;
