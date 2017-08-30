import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import 'react-hot-loader/patch';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './startup';
import './style.css';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  );
};

render();

if (module.hot) {
  module.hot.accept('./startup', () => render());
}