import React, { useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.js';
import UsersList from 'components/organisms/UsersList/UsersList.js';
import { UsersContext } from 'providers/UsersProvider.js';

const Dashboard = () => {
  const { users } = useContext(UsersContext);
  return (
    <ViewWrapper>
      <UsersList users={users} />
    </ViewWrapper>
  );
};

export default Dashboard;
