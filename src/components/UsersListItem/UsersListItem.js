import React from 'react';
import propTypes from 'prop-types';

function UsersListItem({ userData: { name, average, attendace = '0%' } }) {
  return (
    <li>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>attendace: {attendace}</p>
      </div>
      <button>X</button>
    </li>
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
