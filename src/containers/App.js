import React, { Component } from 'react';

import WelcomeHeader from '../components/WelcomeHeader';
import IdeasPage from './IdeasPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomeHeader />
        <IdeasPage/>
      </div>
    );
  }
}

export default App;
