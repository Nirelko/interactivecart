import React from 'react';
import {Flex} from 'reflexbox';

import Header from './header';
import MainRoutes from './main-routes';

export default () => (
  <Flex column>
    <Header />
    <MainRoutes />
  </Flex>
);