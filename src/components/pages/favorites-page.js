import React from 'react';
import FavoriteList from '../favorite-list';
import SearchInput from '../search-input';

import { connect } from 'react-redux';

import { searchChange } from '../../actions';

const FavoritesPage = ({search, searchChange}) => {
  return (
    <>
      <SearchInput title='Search' value={search} searchChange={searchChange} />
      <FavoriteList />
    </>
  )
};

const mapStateToProps = ({ search }) => {
  return { search };
};

const mapDispatchToProps = {
  searchChange
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);