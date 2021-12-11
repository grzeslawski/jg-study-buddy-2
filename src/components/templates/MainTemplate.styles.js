import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 150px 1fr;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow-x: scroll;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
