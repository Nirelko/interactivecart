import React from 'react';
import { AppBar } from 'material-ui';

import HeaderTitle from './header-title';

export default () => (
  <AppBar title={<HeaderTitle />} />
);