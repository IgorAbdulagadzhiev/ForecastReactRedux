import React from 'react';
import Button from '../button';

import { deleteFromFavorites } from '../../actions';

import { connect } from 'react-redux';

const DeleteButton = ({id, favorites, deleteFromFavorites}) => {
  const handleClick = (id, favorites) => {
    const idx = favorites.findIndex((item) => {
      return item.woeid === id;
    });
    const newFavorites = [
      ...favorites.slice(0, idx),
      ...favorites.slice(idx + 1)
    ]
    deleteFromFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  }

  return (
    <Button onClick={() => handleClick(id, favorites)}>Delete</Button>
  )
}

const mapStateToProps = ( { favorites } ) => {
  return { favorites };
};

const mapDispatchToProps = {
  deleteFromFavorites
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);

