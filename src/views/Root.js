import { GlobalStyle } from 'assets/styles/GlobalStyle.js';
import { theme } from 'assets/styles/theme.js';
import { Wrapper } from './Root.styles.js';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate.js';
import AddUser from './AddUser.js';
import Dashboard from './Dashboard.js';
import UsersProvider from 'providers/UsersProvider.js';

function Root() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Switch>
                <Route path="/add-user">
                  <AddUser />
                </Route>
                <Route path="/">
                  <Dashboard />
                </Route>
              </Switch>
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
}

export default Root;
