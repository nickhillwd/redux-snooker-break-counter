import React from 'react';
import {createStore} from 'redux';
import { render } from 'react-dom';
import {Provider} from 'react-redux';

import scoreApp from './reducer.js';
import App from './components/App.js';

let store = createStore(scoreApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);