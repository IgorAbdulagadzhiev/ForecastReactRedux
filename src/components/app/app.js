import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import {SearchPage, FavoritesPage, ForecastPage} from '../pages';
import { connect } from 'react-redux';
import { initialFavorites } from '../../actions';

import Header from '../header';

const App = ({initialFavorites}) => {
  useEffect(() => {
    initialFavorites(JSON.parse(localStorage.getItem('favorites')) || []);
  }, [initialFavorites]);
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
        path='/forecast/:id'
        render={({ match }) => {
          const { id } = match.params;
        return <ForecastPage itemId={id}/>}
      }
        exact />
      </Switch>
    </main>
  )
};

const mapStateToProps = ({ favorites }) => {
  return {favorites};
}

const mapDispatchToProps = {
  initialFavorites
};

export default connect(mapStateToProps, mapDispatchToProps)(App);