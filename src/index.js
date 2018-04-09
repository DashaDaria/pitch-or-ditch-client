import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js';
import WelcomeHeader from './components/WelcomeHeader';

import Navbar from './components/Navbar';

const Home = () => <h1>Home!</h1>;

const About = () => <h1>This is my about component!</h1>;


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>

      <Navbar />
        <Route path='/'  component={App} />
        <Route exact path='/home' render={WelcomeHeader} />
        <Route exact path='/about' render={About} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
