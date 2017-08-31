import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui';
import { getMuiTheme } from 'material-ui/styles';
import { Provider } from 'react-redux';

import Shell from './shell';
import theme from './theme';
import store from './store.redux';

export default () => (
  <BrowserRouter>
    <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
      <Provider store={store}>
        <Shell />
      </Provider>
    </MuiThemeProvider>
  </BrowserRouter>
);