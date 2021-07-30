import React, { useState, FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useAuth } from './../../../../../core/contexts/AuthContext';
import {
  FormTitle,
  FormGroup,
  FormError,
  FormGroupLabel,
  FormSubmitBtn,
  FormControl,
} from './../../../../../global-styles';
import { Inputs } from '../../../../../core/interfaces/inputs';

export const LoginForm: FC = () => {
  const { login } = useAuth();
  const history = useHistory();
  const [isHidden, setIsHidden] = useState(true);

  // Submit Handler
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  async function onSubmit(data: any) {
    try {
      await login(data.email, data.password);
      history.push('/');
    } catch (e) {
      alert('Incorrect data!');
      setIsHidden(false);
    }
  }

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
      <FormError id='sub-error' hidden={isHidden}>
        Incorrect email or password
      </FormError>
      <FormSubmitBtn type='submit' value='Log in' />
    </form>
  );
};

export default LoginForm;
