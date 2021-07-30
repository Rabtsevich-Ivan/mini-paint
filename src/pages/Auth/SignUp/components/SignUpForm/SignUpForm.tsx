import React, { useState } from 'react';
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
} from './../../../../../global-styles';
import { Inputs } from '../../../../../core/interfaces/inputs';

export default function SignUpForm() {
  const { signup } = useAuth();
  const history = useHistory();

  // Submit Handler
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  function onSubmit(data: any) {
    signup(data.email, data.password);
    history.push('/');
  }

  return (
    <form action='' onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>SignUp Form</FormTitle>
      <FormGroup>
        <FormGroupLabel htmlFor='email'>Enter your email</FormGroupLabel>
        <input
          {...register('email', { required: 'Email is required' })}
          className='form-control'
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
        <input
          {...register('password', { required: 'Password is Required ' })}
          className='form-control'
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
      <FormSubmitBtn type='submit' value='Sign Up' />
    </form>
  );
}
