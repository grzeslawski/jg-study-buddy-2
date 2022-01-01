import Note from 'components/molecules/Note/Note';
import React, { useState } from 'react';
import { useGetNotesQuery } from 'store';
import { Wrapper, NotesWrapper, WidgetHandler } from './NotesWidget.styles';

const NotesWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useGetNotesQuery();

  const handleToggleWidget = () => setIsOpen((prevState) => !prevState);

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <NotesWrapper>
          {data.notes.length ? (
            data.notes.map(({ title, content, id }) => <Note key={id} id={id} title={title} content={content} />)
          ) : (
            <p>Create your first note</p>
          )}
        </NotesWrapper>
      )}
    </Wrapper>
  );
};

export default NotesWidget;
