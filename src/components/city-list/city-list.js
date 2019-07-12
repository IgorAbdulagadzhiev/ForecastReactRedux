import React, { Component } from 'react';
import CityListItem from '../city-list-item';
import { connect } from 'react-redux';

import { withWeatherService } from '../hoc';
import { locationSearchLoaded } from '../../actions';
import { compose } from 'redux';

import Spinner from '../spinner';

class CityList extends Component {

  componentDidMount() {
    const { weatherService, locationSearchLoaded } = this.props;
    weatherService.getCities('m')
      .then((data) => {
        locationSearchLoaded(data);
      });
  }

  render() {
    const  { cities, loading } = this.props;

    if (loading) {
      return <Spinner />
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
}

const mapStateToProps = ({ cities, loading }) => {
  return { cities, loading };
};

const mapDispatchToProps = {
  locationSearchLoaded
};

export default compose(
  withWeatherService(),
  connect(mapStateToProps, mapDispatchToProps)
)(CityList);