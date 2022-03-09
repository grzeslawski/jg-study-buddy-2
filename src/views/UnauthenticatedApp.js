import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth.js';
import FormField from 'components/molecules/FormField/FormField.js';
import { Button } from 'components/atoms/Button/Button.js';
import { FormWrapper } from './UnauthenticatedApp.styles';

const UnauthenticatedApp = () => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <FormWrapper onSubmit={handleSubmit(auth.signIn)}>
      <FormField label="login" name="login" id="login" {...register('login', { required: true })} />
      {errors.login && <span>Login is required</span>}
      <FormField
        label="password"
        name="password"
        id="password"
        type="password"
        {...register('password', { required: true })}
      />
      {errors.password && <span>password is required</span>}
      <Button type="submit">Sign in</Button>
    </FormWrapper>
  );
};

export default UnauthenticatedApp;
