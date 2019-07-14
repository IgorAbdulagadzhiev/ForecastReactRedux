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
  console.log('add');
  return {
    type: 'ADD_TO_FAVORITES',
    payload: city
  }
}

const deleteFromFavorites = (cities) => {
  console.log('delete');
  return {
    type: 'DELETE_FROM_FAVORITES',
    payload: cities
  }
}

const initialFavorites = (favorites) => {
  return {
    type: 'INITIAL_FAVORITES',
    payload: favorites
  }
}

export {
  locationSearchLoaded,
  searchChange,
  addToFavorites,
  initialFavorites,
  deleteFromFavorites,
};