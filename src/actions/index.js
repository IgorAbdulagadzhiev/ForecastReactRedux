const locationSearchLoaded = (newCities) => {
  return {
    type: 'LOCATION_SEARCH_LOADED',
    payload:  newCities
  };
};

const locationSearchRequested = () => {
  return {
    type: 'LOCATION_SEARCH_REQUESTED'
  };
};

const locationSearchError = (error) => {
  return {
    type: 'LOCATION_SEARCH_ERROR',
    payload: error,
  }
}
const searchChange = (str) => {
  return {
    type: 'SEARCH_CHANGE',
    payload: str
  };
};

const addToFavorites = (city) => {
  return {
    type: 'ADD_TO_FAVORITES',
    payload: city
  }
}

const deleteFromFavorites = (cities) => {
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

const addID = (woeid) => {
  return {
    type: 'ADD_ID',
    payload: woeid
  }
}

const cityWeatherLoaded = (obj) => {
  return {
    type: 'CITY_WEATHER_LOADED',
    payload: obj
  }
}

const cityWeatherRequested = () => {
  return {
    type: 'CITY_WEATHER_REQUESTED'
  };
};

const cityWeatherError = (error) => {
  return {
    type: 'CITY_WEATHER_ERROR',
    payload: error,
  }
}

export {
  locationSearchLoaded,
  searchChange,
  addToFavorites,
  initialFavorites,
  deleteFromFavorites,
  addID,
  cityWeatherLoaded,
  locationSearchRequested,
  locationSearchError,
  cityWeatherRequested,
  cityWeatherError,
};