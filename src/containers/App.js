import React, { Component } from 'react';

import WelcomeHeader from '../components/WelcomeHeader';
import IdeaSearchBar from './IdeaSearchBar';
import Ideas from './Ideas';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomeHeader />
        <IdeaSearchBar />
        <Ideas />
      </div>
    );
  }
}

export default App;
