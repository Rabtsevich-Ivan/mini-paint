import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../../../core/actions/auth';
import {
  FormTitle,
  FormGroup,
  FormError,
  FormGroupLabel,
  FormControl,
} from './../../../../../global-styles';
import { Inputs } from '../../../../../core/interfaces/inputs';
import Button from '../../../../../core/components/Buttons/Button';
import { User } from '../../../../../core/interfaces/user';
import { selectAuthError } from '../../../../../core/selectors/auth';
import { auth } from '../../../../../core/firebase/firebase';

export const LoginForm: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const errorStatus = useSelector(selectAuthError);

  // Useform library
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  // Submit Handler
  const onSubmit = (data: User): void => {
    dispatch(login(data.email, data.password));
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        history.push('/');
      }
    });
  }, []);

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
        <ErrorMessage
          errors={errors}
          name='email'
          render={({ message }) => <FormError>{message}</FormError>}
        />
      </FormGroup>

      <FormGroup>
        <FormGroupLabel htmlFor='password'>Enter your Password</FormGroupLabel>
        <FormControl
          {...register('password', { required: 'Password is required ' })}
          name='password'
          id='password'
          type='password'
        />
        <ErrorMessage
          errors={errors}
          name='password'
          render={({ message }) => <FormError>{message}</FormError>}
        />
      </FormGroup>
      {errorStatus && (
        <FormError id='sub-error'>Incorrect email or password</FormError>
      )}

      <Button btnType='formBtn' as='input' type='submit' value='Log in' />
    </form>
  );
};

export default LoginForm;
