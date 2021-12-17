import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input.js';

export const SearchBarWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2/3;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

  ${Input} {
    font-size: ${({ theme }) => theme.fontSize.xl};
    width: 100%;
    max-width: 350px;
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
  }
`;

export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: 40px;

  p {
    margin: 5px;
  }
`;
