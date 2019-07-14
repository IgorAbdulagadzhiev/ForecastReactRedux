import React, { useEffect } from 'react';
import CityListItem from '../city-list-item';
import { connect } from 'react-redux';

import styled from 'styled-components';

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
      <StyledList>
        {
          cities.map((city) => {
            return (
              <StyledListItem key={city.woeid}><CityListItem city={city} /></StyledListItem>
            )
          })
        }
      </StyledList>
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

const StyledList = styled.ul`
  margin: 50px;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  list-style: none;
`;

const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default compose(
  withWeatherService(),
  connect(mapStateToProps, mapDispatchToProps)
)(CityList);