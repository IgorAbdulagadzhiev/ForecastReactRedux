import React, { useEffect } from 'react';
import CityListItem from '../city-list-item';
import { connect } from 'react-redux';

import { withWeatherService } from '../hoc';
import { locationSearchLoaded,
  locationSearchRequested,
  locationSearchError } from '../../actions';
import { compose } from 'redux';
import ErrorIndicator from '../error-indicator';

import Spinner from '../spinner';

const CityList = ({ search, weatherService,
   locationSearchLoaded, cities, loading,
    locationSearchRequested, locationSearchError, error }) => {

  useEffect(() => {
    locationSearchRequested();
    if(search.length === 0) {
      locationSearchLoaded([]);
      return;
    }
    weatherService.getCities(search)
      .then((data) => {
        locationSearchLoaded(data);
      })
      .catch((err) => locationSearchError(err));

      return () => {
        locationSearchLoaded([]);
      }
  }, [search, locationSearchError, locationSearchLoaded, locationSearchRequested, weatherService]);

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <ul>
        {
          cities.map((city) => {
            return (
              <li key={city.woeid}><CityListItem city={city} /></li>
            )
          })
        }
      </ul>
    );
}

const mapStateToProps = ({ cities, loading, search, error }) => {
  return { cities, loading, search, error };
};

const mapDispatchToProps = {
  locationSearchLoaded,
  locationSearchRequested,
  locationSearchError,
};

export default compose(
  withWeatherService(),
  connect(mapStateToProps, mapDispatchToProps)
)(CityList);