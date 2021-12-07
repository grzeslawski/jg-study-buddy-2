import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem.js';
import { Wrapper, StyledList } from './UsersList.styles';

function UsersList() {
  return (
    <Wrapper>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
}

export default UsersList;
