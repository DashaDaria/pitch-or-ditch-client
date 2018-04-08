import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js';
import WelcomeHeader from './components/WelcomeHeader';

const About = () => {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        
        <Route path='/home' render={WelcomeHeader} />
        <Route exact path='/about' render={About} />
        <Route exact path='/login' render={Login} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
