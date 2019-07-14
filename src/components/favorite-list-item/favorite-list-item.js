import React from 'react';
import DeleteButton from '../delete-button';
import { Link } from 'react-router-dom';

const FavoriteListItem = ({ city }) => {
  const { title, woeid } = city;

  return (
    <>
      <Link to={`/forecast/${woeid}`}>{ title }</Link>
      <DeleteButton id={woeid} />
    </>
  );
};

export default FavoriteListItem;