import React from 'react';

import { connect } from 'react-redux';
import FavoriteListItem from '../favorite-list-item';
import styled from 'styled-components';

const FavoriteList = ({ favorites, search }) => {
  const visibleItems = favorites.filter((item) => {
    return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
  });
  return (
    <StyledList>
      {
        visibleItems.map((favorite) => {
          return (
            <StyledListItem key={favorite.woeid}><FavoriteListItem city={favorite}/></StyledListItem>
          )
        })
      }
    </StyledList>
  )
}

const mapStateToProps = ({ favorites, search }) => {
  return { favorites, search };
};

const StyledList = styled.ul`
  margin: 50px;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  list-style: none;
`;

const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default connect(mapStateToProps)(FavoriteList);