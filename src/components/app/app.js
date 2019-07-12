import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {SearchPage, FavoritesPage, ForecastPage} from '../pages';

const App = () => {
  return (
    <Switch>
      <Route
      path='/'
      component={SearchPage}
      exact />

      <Route
      path='/favorites'
      component={FavoritesPage}
      exact />

      <Route
      path='/forecast'
      component={ForecastPage}
      exact />
    </Switch>
  )
};

export default App;