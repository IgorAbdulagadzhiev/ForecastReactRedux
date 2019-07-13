import React from 'react';
import Button from '../button';

import { connect } from 'react-redux';

import { addToFavorites } from '../../actions';

const FavoriteButton = ({ favorites, addToFavorites, id, cities}) => {
  const handleClick = (id, cities) => {
    const newCity = cities.find((city) => {
      if (id === city.woeid) {
        return city
      }
    });
    addToFavorites(newCity);
  }
  
  return (
    <Button onClick={() => handleClick(id, cities)}>Add to favorite</Button>
  )
}

const mapStateToProps = ({ favorites, cities }) => {
  return { favorites, cities };
};

const mapDispatchToProps = {
  addToFavorites
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);