import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { withWeatherService } from '../hoc';
import { cityWeatherLoaded,
  cityWeatherError,
  cityWeatherRequested } from '../../actions';
import WeatherListItem from '../weather-list-item';
import ErrorIndicator from '../error-indicator';
import styled from 'styled-components';

import { compose } from 'redux';


const WeatherList = ({weatherService, cityWeather,
  itemId, cityWeatherLoaded, error, cityWeatherError, cityWeatherRequested }) => {
  useEffect(() => {
    cityWeatherRequested();
    weatherService.getWeather(itemId)
      .then((data) => {
        cityWeatherLoaded(data);
      })
      .catch((err) => {
        cityWeatherError(err);
      });
    return () => {
      cityWeatherLoaded({consolidated_weather: []});
    }
  }, [itemId,cityWeatherLoaded, weatherService, cityWeatherError, cityWeatherRequested ]);
  const visibleItems = cityWeather.consolidated_weather.slice(0, 5);

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <>
      <StyledTitle>{cityWeather.title}</StyledTitle>
      <StyledList>
        {
          visibleItems.map((day) => {
            return (
              <li key={day.id}><WeatherListItem day={day}  title={cityWeather.title} /></li>
            )
          })
        }
      </StyledList>
    </>
  )
}

const mapStateToProps = ({ woeid, cityWeather, error }) => {
  return { woeid, cityWeather, error };
};

const mapDispatchToProps = {
  cityWeatherLoaded,
  cityWeatherError,
  cityWeatherRequested,
}

const StyledList = styled.ul`
  margin: 20px 50px 50px 50px;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, 180px);
  grid-gap: 50px;
  list-style: none;
`;

const StyledTitle = styled.h2`
  margin-left: 50px;
`;

export default compose(
  withWeatherService(),
  connect(mapStateToProps, mapDispatchToProps)
)(WeatherList);