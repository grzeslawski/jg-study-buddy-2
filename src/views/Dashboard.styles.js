import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const GroupWrapper = styled(ViewWrapper)`
  margin: 0;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const StyledNav = styled.div`
  margin-left: 20px;
  display: flex;
  gap: 15px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.darkGrey};
    font-weight: 700;
    text-decoration: none;
    border-radius: 50%;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.grey};
    }
  }
`;
