import React from 'react';
import DeleteButton from '../delete-button';

const FavoriteListItem = ({ city }) => {
  const { title, woeid } = city;

  return (
    <>
      <span>{ title }</span>
      <DeleteButton id={woeid} />
    </>
  );
};

export default FavoriteListItem;