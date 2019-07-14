import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <StyledLink to='/favorites'>Favorites</StyledLink>
      <StyledLink to='/'>Search</StyledLink>
    </StyledHeader>
  )
};

const StyledLink = styled(Link)`
  padding-left: 50px;
  text-decoration: none;
  font-size: 20px;
  color: #ffffff;

  &:hover {
    color: blue;
  }

  &:first-child {
    padding-left: 0;
  }
`;

const StyledHeader = styled.header`
  padding: 20px 50px;
  background-color: tomato;
`;

export default Header;