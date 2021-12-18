import React from 'react';
import { useParams } from 'react-router-dom';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem.js';
import { StyledList } from './StudentsList.styles';
import { Title } from 'components/atoms/Title/Title.js';
import { useStudents } from 'hooks/useStudents';

const StudentsList = () => {
  const { id } = useParams();
  const { students } = useStudents({ groupId: id });

  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

export default StudentsList;
