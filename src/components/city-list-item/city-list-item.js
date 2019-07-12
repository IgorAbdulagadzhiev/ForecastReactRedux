import React from 'react';

const CityListItem = ({ city }) => {
  const { title, woeid } = city;
  return (
    <>
      <span>{ title }</span>
      <span>{ woeid }</span>
    </>
  );
};

export default CityListItem;