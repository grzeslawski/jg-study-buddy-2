import React from 'react';
import propTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton.js';
import { StyledAverage, StyledInfo, Wrapper } from './UsersListItem.styles.js';
import { UserShape } from 'types';

function UsersListItem({ deleteUser, userData: { name, average, attendace = '0%' } }) {
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
