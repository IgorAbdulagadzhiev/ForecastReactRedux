import React from 'react';
import FavoriteButton from '../favorite-button';
import { Link } from 'react-router-dom';

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
      <Link to={`/forecast/${woeid}`} onClick={() => {addID(woeid)}}>{ title }</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(CityListItem);