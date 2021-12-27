import { Title } from 'components/atoms/Title/Title';
import styled, { keyframes } from 'styled-components';

const shrinkAnimation = keyframes`
from {
    transform: translateX(-50%) scaleX(1);
}
to {
    transform: translateX(-50%) scaleX(0);

}
`;

const slideAnimation = keyframes`
from {
    transform: translate(-50%, 500%);
}
to {
    transform: translate(-50%, 0);
}
`;

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10%;
  padding: 25px 25px 15px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.error};
  border: 3px solid ${({ theme }) => theme.colors.error};
  border-radius: 15px;
  z-index: 999;
  animation: ${slideAnimation} 1s ease-in-out 1 forwards, ${slideAnimation} 1s 6s ease-in-out reverse forwards;

  ${Title} {
    color: ${({ theme }) => theme.colors.error};
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.error};
    width: 60px;
    height: 5px;
    border-radius: 50px;
  }

  &::before {
    opacity: 0.5;
  }

  &::after {
    transform: translateX(-50%) scaleX(1);
    transform-origin: left center;
    animation: ${shrinkAnimation} 5s 1s linear 1 forwards;
  }
`;
