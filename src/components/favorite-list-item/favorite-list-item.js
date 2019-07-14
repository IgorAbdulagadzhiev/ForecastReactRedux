import React from 'react';
import DeleteButton from '../delete-button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FavoriteListItem = ({ city }) => {
  const { title, woeid } = city;

  return (
    <>
      <StyledLink to={`/forecast/${woeid}`}>{ title }</StyledLink>
      <DeleteButton id={woeid} />
    </>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: #000000;

  &:hover {
    color: blue;
  }
`;

export default FavoriteListItem;