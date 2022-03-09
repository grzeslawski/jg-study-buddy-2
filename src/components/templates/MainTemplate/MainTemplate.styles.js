import { breakpointUp } from 'assets/styles/breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow-x: scroll;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  overflow: hidden;
  position: relative;

  @media ${breakpointUp.lg} {
    grid-template-columns: 150px 1fr 0.75fr;
    grid-template-rows: 90px 1fr;
  }
`;
