import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

export function Button({ children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
}