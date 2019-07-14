import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { addID } from '../../actions';
import WeatherList from '../weather-list';

const ForecastPage = ({itemId}) => {
    useEffect(() => {
      addID(itemId);
    });
  return <WeatherList itemId={itemId}/>
};

const mapDispatchToProps = {
  addID
}


export default connect(undefined, mapDispatchToProps)(ForecastPage);