import { Wrapper } from './Root.styles.js';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate.js';
import Dashboard from './Dashboard.js';
import FormField from 'components/molecules/FormField/FormField.js';
import { Button } from 'components/atoms/Button/Button.js';
import { useAuth } from 'hooks/useAuth.js';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <Redirect to="/group" />
          </Route>
          <Route path="/group/:id?">
            <Dashboard />
          </Route>
        </Switch>
      </Wrapper>
    </MainTemplate>
  );
};

const UnauthenticatedApp = () => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(auth.signIn)}
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: ' center',
        alignItems: 'center',
      }}
    >
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
    </form>
  );
};

const Root = () => {
  const auth = useAuth();

  return auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Root;
