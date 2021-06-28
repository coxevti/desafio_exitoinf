import { Column, ColumnActions, Container } from 'components/Card/styles';
import React from 'react';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';

export function Card() {
  return (
    <Container>
      <Column>
        <span>nome</span>
        Valdir
      </Column>
      <Column>
        <span>sobrenome</span>
        Coxev
      </Column>
      <Column>
        <span>telefone</span>
        (67) 99237-3533
      </Column>
      <Column>
        <span>e-mail</span>
        valdircoxevdev@gmail.com
      </Column>
      <Column>
        <ColumnActions>
          <FiEdit3 />
          <FiTrash2 />
        </ColumnActions>
      </Column>
    </Container>
  );
}