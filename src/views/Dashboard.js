import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.js';
import { Link } from 'react-router-dom';
import { Wrapper, TitleWrapper, StyledNav } from './Dashboard.styles';
import { Title } from 'components/atoms/Title/Title.js';
import { useStudents } from 'hooks/useStudents';
import StudentsList from 'components/organisms/StudentsList/StudentsList.js';

const Dashboard = () => {
  const { groups } = useStudents();
  const { id } = useParams();
  if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0]}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Group {id}</Title>
        <StyledNav>
          {groups.map((group) => (
            <Link key={group} to={`/group/${group}`}>
              {group}{' '}
            </Link>
          ))}
        </StyledNav>
      </TitleWrapper>
      <ViewWrapper>
        <StudentsList />
      </ViewWrapper>
    </Wrapper>
  );
};

export default Dashboard;
