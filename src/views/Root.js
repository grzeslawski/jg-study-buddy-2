import React from 'react';
import { useAuth } from 'hooks/useAuth.js';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage.js';
import { useError } from 'hooks/useError.js';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

const Root = () => {
  const auth = useAuth();
  const { error } = useError();

  return (
    <>
      {error ? <ErrorMessage message={error} /> : null}
      {auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
};

export default Root;
