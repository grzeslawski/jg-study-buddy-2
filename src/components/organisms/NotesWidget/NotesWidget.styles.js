import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 400px;
  height: auto;
  max-height: 700px;
  position: absolute;
  right: 0;
  top: 40px;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(400px)')};
  transition: transform 0.6s ease-in-out;
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
`;

export const WidgetHandler = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  transform: rotate(-90deg);
  position: absolute;
  left: -55px;
  top: 40px;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 8px 8px 0 0;
  line-height: 1;
  cursor: pointer;
`;

export const NotesWrapper = styled.div`
  max-height: 700px;
  overflow-y: scroll;
  padding: 20px 60px;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 15px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.grey};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
