import React from 'react';
import FavoriteButton from '../favorite-button';

const CityListItem = ({ city }) => {
  const { title, woeid, disabled } = city;
  return (
    <>
      <span>{ title }</span>
      <FavoriteButton id={woeid} disabled={disabled} />
    </>
  );
};

export default CityListItem;