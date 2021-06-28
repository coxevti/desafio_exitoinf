import styled, { keyframes } from 'styled-components';

const Up = keyframes`
  from {
    opacity: 0;
    transform: translateY(35px)
  }
  to {
    opacity: 1;
    transform: translateY(0)
  }
`

type ContainerProps = {
  delay: string;
}

export const Container = styled.div<ContainerProps>`
  transform: translateY(35px);
  opacity: 0;
  animation: ${Up} 200ms forwards;
  animation-delay: ${props => props.delay};
`