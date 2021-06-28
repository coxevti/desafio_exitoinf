import { AnimationUp } from 'components/AnimationUp';
import { Button } from 'components/Button';
import { Container, Content, PageHeader } from 'components/Header/styles';
import React from 'react';
import { FiPlus } from 'react-icons/fi';

export function Header() {
  return (
    <PageHeader>
      <AnimationUp>
        <Container>
          <Content>
            <h1>Gestão de Usuários</h1>
            <Button>
              <span>
                <FiPlus />
              </span>
              Adicionar Usuário
            </Button>
          </Content>
        </Container>
      </AnimationUp>
    </PageHeader>
  );
}