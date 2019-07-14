import React from 'react';
import styled from 'styled-components';

const Button = ({ children, onClick, disabled}) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>{ children }</StyledButton>
  )
}

const StyledButton = styled.button`
  box-sizing: border-box;
  color: tomato;
  font-size: 16px;
  margin: 10px;
  padding: 10px 10px;
  border: 2px solid tomato;
  border-radius: 3px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    border: 3px solid blue;
  }
`; 

export default Button;