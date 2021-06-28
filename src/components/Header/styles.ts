import styled from 'styled-components';

export const PageHeader = styled.header`
  width: 100vw;
  background: var(--color-primary);
  padding-top: 0.313rem;
  padding-bottom: 5rem;
`
export const Container = styled.div`
  width: min(1440px, 90vw);
  margin: 0 auto;  
`

export const Content = styled.section`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    text-transform: uppercase;
  }
`;