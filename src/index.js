import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import WelcomeHeader from './components/WelcomeHeader';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <WelcomeHeader />,
  <App />,
  document.getElementById('root'));

registerServiceWorker();
