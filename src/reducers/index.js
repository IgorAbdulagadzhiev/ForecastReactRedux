const initialState = {
  cities: [],
  loading: false,
  search: '',
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch ( action.type) {
    case 'LOCATION_SEARCH_LOADED':
      return {
        ...state,
        cities: action.payload,
        loading: false
      };
    case 'SEARCH_CHANGE':
      return {
        ...state,
        search: action.payload
      };
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    case 'DELETE_FROM_FAVORITES':
      return {
        ...state,
        favorites: [...action.payload]
      }
    case 'INITIAL_FAVORITES':
      return {
        ...state,
        favorites: [...action.payload],
      }

    default:
      return state;
  }
};

export default reducer;