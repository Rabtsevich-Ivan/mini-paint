import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useDispatch } from 'react-redux';
import { auth } from '../../../../../core/firebase/firebase';
import {
  FormTitle,
  FormGroup,
  FormError,
  FormGroupLabel,
  FormControl,
} from './../../../../../global-styles';
import { Inputs } from '../../../../../core/interfaces/inputs';
import { signup } from '../../../../../core/actions/auth';
import Button from '../../../../../core/components/Buttons/Button';

export const SignUpForm: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    // auth.onAuthStateChanged return method, which will
    // delete this listener when we unmount this component
    auth.onAuthStateChanged((user) => {
      if (user) {
        history.push('/');
      }
    });
  }, []);

  // Submit Handler
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  function onSubmit(data: any) {
    dispatch(signup(data.email, data.password));
    //history.push('/');
  }

  return (
    <form action='' onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>SignUp Form</FormTitle>
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
          {...register('password', { required: 'Password is Required ' })}
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
      <Button btnType='formBtn' as='input' type='submit' value='Sign Up' />
    </form>
  );
};

export default SignUpForm;
