import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { withWeatherService } from '../hoc';
import { cityWeatherLoaded,
  cityWeatherError,
  cityWeatherRequested } from '../../actions';
import WeatherListItem from '../weather-list-item';

import { compose } from 'redux';


const WeatherList = ({weatherService, cityWeather,
  itemId, cityWeatherLoaded }) => {
  useEffect(() => {
    weatherService.getWeather(itemId)
      .then((data) => {
        cityWeatherLoaded(data);
      });
    return () => {
      cityWeatherLoaded({consolidated_weather: []});
    }
  }, [itemId,cityWeatherLoaded, weatherService]);
  const visibleItems = cityWeather.consolidated_weather.slice(0, 5);
  return (
    <ul>
      {
        visibleItems.map((day) => {
          return (
            <li key={day.id}><WeatherListItem day={day}  title={cityWeather.title} /></li>
          )
        })
      }
    </ul>
  )
}

const mapStateToProps = ({ woeid, cityWeather }) => {
  return { woeid, cityWeather };
};

const mapDispatchToProps = {
  cityWeatherLoaded,
  cityWeatherError,
  cityWeatherRequested,
}

export default compose(
  withWeatherService(),
  connect(mapStateToProps, mapDispatchToProps)
)(WeatherList);