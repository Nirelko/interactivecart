import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ProductsList from './products-list';

export default () => (
  <Switch>
    <Route exact path='/' component={ProductsList} />
  </Switch>
);
