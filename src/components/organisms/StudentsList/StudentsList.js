import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem.js';
import { StyledList } from './StudentsList.styles';
import { Title } from 'components/atoms/Title/Title.js';
import { useStudents } from 'hooks/useStudents';

const StudentsList = ({ handleOpenStudentsDetails }) => {
  const [students, setStudents] = useState([]);
  const { id } = useParams();
  const { getStudentsByGroup } = useStudents();

  useEffect(() => {
    (async () => {
      const students = await getStudentsByGroup(id);
      setStudents(students);
    })();
  }, [getStudentsByGroup, id]);

  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students.map((userData) => (
          <StudentsListItem
            onClick={() => handleOpenStudentsDetails(userData.id)}
            key={userData.name}
            userData={userData}
          />
        ))}
      </StyledList>
    </>
  );
};

export default StudentsList;
