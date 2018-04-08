import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <App />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
