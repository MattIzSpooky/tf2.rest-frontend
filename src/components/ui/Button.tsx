import styled from '@emotion/styled';
import React, { ComponentPropsWithoutRef } from 'react';

const StyledButton = styled.button`
  color: var(--text);
  border: none;
  cursor: pointer;
  padding: .5rem 1rem;
  margin: 1rem 0;
  font-size: 1rem;
  background-color: var(--primary);
  border: .1rem solid var(--primary);
  transition: .2s border ease-in-out;
  font-family: var(--font);
  border-radius: 8px;
  
  &:hover {
    outline: none;
    transition: .1s border ease-out;
    border: .1rem solid var(--secondary);
  }

  &:focus {
    outline: none;
    transition: .1s border ease-out;
    border: .1rem solid var(--secondary);
  }

  &:active {
    opacity: .7;
    transition: none;
  }

  &:disabled {
    opacity: .5;
  }
`;

export default function Button({ ...props }: ComponentPropsWithoutRef<'button'>) {
  return <StyledButton {...props} />;
}
