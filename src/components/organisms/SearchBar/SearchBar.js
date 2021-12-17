import React from 'react';
import { Input } from 'components/atoms/Input/Input.js';
import { SearchBarWrapper, StatusInfo } from './SearchBar.styles.js';

export const SearchBar = () => (
  <SearchBarWrapper>
    <StatusInfo>
      <p>Logged as:</p>
      <p>
        <strong>Teacher</strong>
      </p>
    </StatusInfo>
    <Input />
  </SearchBarWrapper>
);
