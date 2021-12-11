import { GlobalStyle } from 'assets/styles/GlobalStyle.js';
import { theme } from 'assets/styles/theme.js';
import { Wrapper } from './Root.styles.js';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { users as usersData } from 'data/users';
import MainTemplate from 'components/templates/MainTemplate.js';
import AddUser from './AddUser.js';
import Dashboard from './Dashboard.js';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

function Root() {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendace: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);
    setFormValues(initialFormState);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Switch>
              <Route path="/add-user">
                <AddUser formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange} />
              </Route>
              <Route path="/">
                <Dashboard deleteUser={deleteUser} users={users} />
              </Route>
            </Switch>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
}

export default Root;
