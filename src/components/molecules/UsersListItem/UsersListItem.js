import React from 'react';
import propTypes from 'prop-types';
import Button from 'components/atoms/Button/Button.js';
import { StyledAverage, StyledInfo, Wrapper } from './UsersListItem.styles.js';

function UsersListItem({ userData: { name, average, attendace = '0%' } }) {
  return (
    <Wrapper>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>{name}</p>
        <p>attendace: {attendace}</p>
      </StyledInfo>
      <Button />
    </Wrapper>
  );
}

UsersListItem.propTypes = {
  userData: propTypes.shape({
    name: propTypes.string.isRequired,
    average: propTypes.string.isRequired,
    attendace: propTypes.string,
  }),
};

export default UsersListItem;
