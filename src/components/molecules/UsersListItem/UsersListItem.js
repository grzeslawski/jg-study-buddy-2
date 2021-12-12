import React, { useContext } from 'react';
import propTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton.js';
import { StyledAverage, StyledInfo, Wrapper } from './UsersListItem.styles.js';
import { UserShape } from 'types';
import { UsersContext } from 'providers/UsersProvider.js';

function UsersListItem({ userData: { name, average, attendace = '0%' } }) {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>{name}</p>
        <p>attendace: {attendace}</p>
      </StyledInfo>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
}

UsersListItem.propTypes = {
  userData: propTypes.shape(UserShape),
};

export default UsersListItem;
