import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation.js';
import { Wrapper } from './MainTemplate.styles.js';
import { SearchBar } from 'components/organisms/SearchBar/SearchBar.js';
import NewsSection from '../NewsSection/NewsSection.js';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
    </Wrapper>
  );
};

export default MainTemplate;
