import React, { useEffect } from 'react';
import Button from '../button';

import { connect } from 'react-redux';

import { addToFavorites } from '../../actions';

const FavoriteButton = ({ favorites, addToFavorites, id, cities, disabled}) => {


  const handleClick = (id, cities) => {
    const newCity = cities.find((city) => {
      if (id === city.woeid) {
        return city;
      }
      return false;
    });
    addToFavorites({...newCity, disabled: true});
  }

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites]);
  
  return (
    <Button disabled={disabled} onClick={() => handleClick(id, cities)}>Add to favorite</Button>
  )
}

const mapStateToProps = ({ favorites, cities }) => {
  return { favorites, cities };
};

const mapDispatchToProps = {
  addToFavorites
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);