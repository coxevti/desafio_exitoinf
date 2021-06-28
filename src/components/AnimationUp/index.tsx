import { ReactNode } from 'react';
import { Container } from './styles';

type Props = {
  children: ReactNode;
  delay?: string;
}

export function AnimationUp({children, delay = '100ms'}: Props){
  return (
    <Container delay={delay}>
      {children}
    </Container>
  );
}