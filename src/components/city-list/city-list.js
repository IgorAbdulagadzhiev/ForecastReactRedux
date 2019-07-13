import React, { useEffect } from 'react';
import CityListItem from '../city-list-item';
import { connect } from 'react-redux';

import { withWeatherService } from '../hoc';
import { locationSearchLoaded } from '../../actions';
import { compose } from 'redux';

import Spinner from '../spinner';

const CityList = ({ search, weatherService,
   locationSearchLoaded, cities, loading }) => {

  useEffect(() => {
    console.log('запрос!');
    // здесь вероятно плохой код, но мне надо было прекратить отправлять запрос
    // при пустой строке и монтировании,а я спустя полчаса поиска ничего лучше
    // придумал
    if(search === '') {
      locationSearchLoaded([]);
      return;
    }
    weatherService.getCities(search)
      .then((data) => {
        locationSearchLoaded(data);
      })
  }, [search]);
  // вероятно ругается из-за hoc, потому что инициализируется вне эффекта.
  // нужно будет исправить.

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

const mapStateToProps = ({ cities, loading, search }) => {
  return { cities, loading, search };
};

const mapDispatchToProps = {
  locationSearchLoaded
};

export default compose(
  withWeatherService(),
  connect(mapStateToProps, mapDispatchToProps)
)(CityList);