import { GlobalStyle } from 'assets/styles/GlobalStyle.js';
import { theme } from 'assets/styles/theme.js';
import { Wrapper } from './Root.styles.js';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate.js';
import Dashboard from './Dashboard.js';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
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
      </ThemeProvider>
    </Router>
  );
};

export default Root;
