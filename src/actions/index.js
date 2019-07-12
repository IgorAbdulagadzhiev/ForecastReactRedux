const locationSearchLoaded = (newCities) => {
  return {
    type: 'LOCATION_SEARCH_LOADED',
    payload:  newCities
  };
};

export {
  locationSearchLoaded,
};