import styled from 'styled-components';

export const Container = styled.button`
  background: var(--color-secondary);
  border-radius: 0.313rem;
  font-family: IBM Plex Sans;
  border: 0;
  padding: 0.72rem 2rem;
  color: var(--color-text);  
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.625rem;
  text-transform: uppercase;
  transition: all .2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover{
    background-color: var(--color-secondary-hover);
  }
  span {
    &::before{
      width: 2rem;
      height: 2rem;
      content: " ";
      background-color: var(--color-background);
      opacity: 0.16;
      position: absolute;
      border-radius: 0.313rem;
    }
    width: 2rem;
    height: 2rem;
    margin-right: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;