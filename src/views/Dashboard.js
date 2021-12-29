import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Wrapper, TitleWrapper, StyledNav, GroupWrapper } from './Dashboard.styles';
import { Title } from 'components/atoms/Title/Title.js';
import { useStudents } from 'hooks/useStudents';
import StudentsList from 'components/organisms/StudentsList/StudentsList.js';
import useModal from 'hooks/useModal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import Modal from 'components/organisms/Modal/Modal';
import EventsProvider from 'providers/EventsProvider';
import { DisplaysEvents } from 'hoc/withEventsData';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [currentStudent, setCurrentStudent] = useState([]);
  const { getGroups, getStudentById } = useStudents();
  const { id } = useParams();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  const handleOpenStudentsDetails = async (id) => {
    const student = await getStudentById(id);
    setCurrentStudent(student);
    handleOpenModal();
  };

  if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0].id}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Group {id}</Title>
        <StyledNav>
          {groups.map(({ id }) => (
            <Link key={id} to={`/group/${id}`}>
              {id}{' '}
            </Link>
          ))}
        </StyledNav>
      </TitleWrapper>
      <GroupWrapper>
        <StudentsList handleOpenStudentsDetails={handleOpenStudentsDetails} />
        <Modal isOpen={isOpen} handleClose={handleCloseModal}>
          <StudentDetails student={currentStudent} />
        </Modal>
      </GroupWrapper>
      <EventsProvider group="A">{(props) => <DisplaysEvents events={props} />}</EventsProvider>
    </Wrapper>
  );
};

export default Dashboard;
