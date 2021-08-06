import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useDispatch } from 'react-redux';
import { login } from '../../../../../core/actions/auth';
import {
  FormTitle,
  FormGroup,
  FormError,
  FormGroupLabel,
  FormControl,
} from './../../../../../global-styles';
import { Inputs } from '../../../../../core/interfaces/inputs';
import { auth } from '../../../../../core/firebase/firebase';
import Button from '../../../../../core/components/Buttons/Button';
import { useSelector } from 'react-redux';
import { isEmpty } from 'react-redux-firebase';

export const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const errorStatus = useSelector((state: any) => state.auth.error);
  //const logStatus = useSelector((state: any) => state.auth.logStatus);
  const auth = useSelector((state: any) => state.firebase.auth)

  // Submit Handler
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = (data: any) => {
    dispatch(login(data.email, data.password));
  };

  if (!isEmpty(auth)) {
    history.push('/');
  }

  // if (auth.currentUser) {
     
  // }

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
