import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui';
import { getMuiTheme } from 'material-ui/styles';

import Shell from './shell';
import theme from './theme';

export default () => (
  <BrowserRouter>
    <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
      <Shell />
    </MuiThemeProvider>
  </BrowserRouter>
);