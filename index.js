import React from 'react';
import {createStore} from 'redux';
import { render } from 'react-dom';
import {Provider} from 'react-redux';

import scoreBoardReducer from './reducer.js';
import App from './components/App.js';

let store = createStore(scoreBoardReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);