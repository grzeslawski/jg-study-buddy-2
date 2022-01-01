import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation.js';
import { Wrapper } from './MainTemplate.styles.js';
import { SearchBar } from 'components/organisms/SearchBar/SearchBar.js';
import NewsSection from '../NewsSection/NewsSection.js';
import NotesWidget from 'components/organisms/NotesWidget/NotesWidget.js';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
      <NotesWidget />
    </Wrapper>
  );
};

export default MainTemplate;
