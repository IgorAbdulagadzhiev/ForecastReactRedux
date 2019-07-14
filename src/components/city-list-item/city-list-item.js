import React from 'react';
import FavoriteButton from '../favorite-button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { addID } from '../../actions';

import { connect } from 'react-redux';

const CityListItem = ({ city, favorites }) => {
  const { title, woeid} = city;
  const isDisable = (city, favorites) => {
    return favorites.some((item) => {
      return item.woeid === city.woeid;
    });
  }
  const disabled = isDisable(city, favorites);
  return (
    <>
      <StyledLink to={`/forecast/${woeid}`} onClick={() => {addID(woeid)}}>{ title }</StyledLink>
      <FavoriteButton id={woeid} disabled={disabled} />
    </>
  );
};

const mapStateToProps = ({favorites}) => {
  return { favorites };
};

const mapDispatchToProps = {
  addID
}

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: #000000;

  &:hover {
    color: blue;
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(CityListItem);