import { GlobalStyle } from 'assets/styles/GlobalStyle.js';
import { theme } from 'assets/styles/theme.js';
import UsersList from 'components/organisms/UsersList/UsersList.js';
import { Wrapper } from './Root.styles.js';
import React from 'react';
import { ThemeProvider } from 'styled-components';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <UsersList />
      </Wrapper>
    </ThemeProvider>
  );
}

export default Root;
