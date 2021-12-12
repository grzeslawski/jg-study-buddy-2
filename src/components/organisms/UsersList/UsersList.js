import React from 'react';
import PropTypes from 'prop-types';
import { UserShape } from 'types';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem.js';
import { StyledList } from './UsersList.styles';
import { Title } from 'components/atoms/Title/Title.js';

const UsersList = ({ users }) => {
  return (
    <>
      <Title>Users list</Title>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UsersList;
