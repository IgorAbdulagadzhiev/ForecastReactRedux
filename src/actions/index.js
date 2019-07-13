const locationSearchLoaded = (newCities) => {
  return {
    type: 'LOCATION_SEARCH_LOADED',
    payload:  newCities
  };
};

const searchChange = (str) => {
  return {
    type: 'SEARCH_CHANGE',
    payload: str
  };
};

const addToFavorites = (city) => {
  console.log('adawda');
  return {
    type: 'ADD_TO_FAVORITES',
    payload: city
  }
}

export {
  locationSearchLoaded,
  searchChange,
  addToFavorites,
};