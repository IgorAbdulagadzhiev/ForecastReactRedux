import React from 'react';

import { connect } from 'react-redux';
import FavoriteListItem from '../favorite-list-item';

const FavoriteList = ({ favorites, search }) => {
  const visibleItems = favorites.filter((item) => {
    return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
  });
  return (
    <ul>
      {
        visibleItems.map((favorite) => {
          return (
            <li key={favorite.woeid}><FavoriteListItem city={favorite}/></li>
          )
        })
      }
    </ul>
  )
}

const mapStateToProps = ({ favorites, search }) => {
  return { favorites, search };
};

export default connect(mapStateToProps)(FavoriteList);