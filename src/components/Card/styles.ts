import styled from 'styled-components';

export const Container = styled.div`
  width: min(1440px, 90vw);
  margin: 0 auto;
  background: var(--color-text);
  border: 1px solid var(--color-hairline-in-light);
  border-radius: .313rem;
  color: var(--color-primary);
  padding: 1.5rem;
  text-align: left;
  display: grid;
  grid-template-columns: 20% 25% 15% 20% 20%;
  align-items: center;
  margin-bottom: 0.5rem;
  position: relative;
  transition: all 0.2s;
  &:hover {
    background: linear-gradient(90deg, rgba(107, 89, 211, 0.2) 0.75%, rgba(252, 253, 255, 0.1) 31.4%), white;
  }
  &::before {
    content: ' ';
    width: .25rem;
    height: 0%;
    background-color: var(--color-secondary);
    border-radius: .313rem 0 0 .313rem;
    position: absolute;
    top: 0;
    left: -1px;
    transition: all .2s;
  }
  &:hover::before {
    height: 100%;
  }
`
export const Column = styled.div`
  > span {
    display: block;
    font-family: Inter;
    font-weight: 600;
    font-size: 0.75rem;
    text-transform: uppercase;
    color: var(--color-card-label);
  }
`
export const ColumnActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.5rem;
  padding: 0.313rem;
  color: var(--color-secondary);
  svg {
    cursor: pointer;
  }  
  svg + svg {
    margin-left: 1rem;
    color: var(--color-delete);
  }
`