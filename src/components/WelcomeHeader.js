import React from 'react';
import '../containers/App.css';
import logo from '../logo.svg';

const WelcomeHeader = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p className="App-title">virtual brainstorming session for your business</p>
    </header>


    <p className="App-topic">
      <strong>Topic:</strong> San Diego Comic-Con 2018
    </p>
  </div>
);

export default WelcomeHeader;
