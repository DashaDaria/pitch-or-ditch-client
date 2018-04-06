import React, { Component } from 'react';

import WelcomeHeader from '../components/WelcomeHeader';
import Ideas from './Ideas';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomeHeader />
        <Ideas />
      </div>
    );
  }
}

export default App;
