import React from 'react'
import CityList from '../city-list';
import SearchInput from '../search-input';
import { connect } from 'react-redux';

import { searchChange } from '../../actions';

const SearchPage = (props) => {
  const { search, searchChange } = props;
  return (
    <>
      <SearchInput title='Search' value={search} searchChange={searchChange} />
      <CityList />
    </>
  );
};



const mapStateToProps = ({ search }) => {
  return { search };
};

const mapDispatchToProps = {
  searchChange
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
