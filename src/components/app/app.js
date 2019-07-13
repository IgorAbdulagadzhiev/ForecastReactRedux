import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {SearchPage, FavoritesPage, ForecastPage} from '../pages';

import Header from '../header';

const App = () => {
  return (
    <main role='main'>
      <Header />
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
    </main>
  )
};

export default App;