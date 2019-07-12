const initialState = {
  cities: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch ( action.type) {
    case 'LOCATION_SEARCH_LOADED':
      return {
        cities: action.payload,
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;