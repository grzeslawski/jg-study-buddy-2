import styled from 'styled-components';

export const Button = styled.button`
  margin: 15px 0;
  padding: 7px 20px;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  color: ${({ theme }) => theme.colors.darkGrey};
  border-radius: 20px;
  border: none;
  font-weight: 700;
`;
