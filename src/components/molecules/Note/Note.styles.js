import styled from 'styled-components';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';

export const NoteWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  position: relative;

  h3,
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const StyledDeleteButton = styled(DeleteButton)`
  position: absolute;
  top: 20px;
  left: -40px;
`;
