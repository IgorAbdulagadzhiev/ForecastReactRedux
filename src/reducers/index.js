const initialState = {
  cities: [],
  loading: true,
  search: '',
  favorites: [],
  woeid: null,
  error: null,
  cityWeather: {
    consolidated_weather: [],
  },
};

const reducer = (state = initialState, action) => {
  switch ( action.type) {
    case 'LOCATION_SEARCH_REQUESTED':
      return {
        ...state,
        cities: [],
        loading: true,
        error: null
      }
    case 'LOCATION_SEARCH_LOADED':
      return {
        ...state,
        cities: action.payload,
        loading: false,
        error: null,
      };
    case 'LOCATION_SEARCH_ERROR':
      return {
        ...state,
        cities: [],
        loading: false,
        error: action.payload
      }
      
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
    case 'ADD_ID':
      return {
        ...state,
        woeid: action.payload
      }
    case 'CITY_WEATHER_LOADED':
      return {
        ...state,
        cityWeather: action.payload
      }
    case 'CITY_WEATHER_REQUESTED':
      return {
        ...state,
        cityWeather: {
          consolidated_weather: [],
        },
        loading: true,
        error: null
      }
    case 'CITY_WEATHER_ERROR':
      console.log('ERROR');
      return {
        ...state,
        cityWeather: {
          consolidated_weather: [],
        },
        loading: false,
        error: action.payload
          }

    default:
      return state;
  }
};

export default reducer;