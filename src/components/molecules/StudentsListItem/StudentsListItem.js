import React, { useContext } from 'react';
import propTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton.js';
import { StyledInfo, Wrapper } from './StudentsListItem.styles.js';
import { UserShape } from 'types';
import { UsersContext } from 'providers/UsersProvider.js';
import { Average } from 'components/atoms/Average/Average.js';

function StudentsListItem({ userData: { name, average, attendace = '0%' }, ...props }) {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper {...props}>
      <Average value={average}>{average}</Average>
      <StyledInfo>
        <p>{name}</p>
        <p>attendace: {attendace}</p>
      </StyledInfo>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
}

StudentsListItem.propTypes = {
  userData: propTypes.shape(UserShape),
};

export default StudentsListItem;
