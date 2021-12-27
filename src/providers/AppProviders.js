import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme.js';
import { AuthProvider } from 'hooks/useAuth.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ErrorProvider } from 'hooks/useError';

const AppProviders = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ErrorProvider>
          <AuthProvider>
            <GlobalStyle />
            {children}
          </AuthProvider>
        </ErrorProvider>
      </ThemeProvider>
    </Router>
  );
};

export default AppProviders;
