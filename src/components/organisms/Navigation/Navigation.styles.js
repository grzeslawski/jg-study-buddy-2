import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { breakpointUp } from 'assets/styles/breakpoints';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.lightPurple};
  justify-content: flex-start;
  padding: 30px 0;

  @media ${breakpointUp.lg} {
    grid-row: 1 / 3;
  }
`;

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.white};
    text-align: right;
    margin-right: 20px;
  }
`;

const activeClassName = 'active-link';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  margin: 15px 20px 15px auto;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 18px;
    height: 3px;
    top: 50%;
    transform: translateY(-50%);
    right: -20px;
    background-color: ${({ theme }) => theme.colors.grey};
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
  }

  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }
`;
