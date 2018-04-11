import React, { Component } from 'react';

import WelcomeHeader from '../components/WelcomeHeader';
import CategoryFilter from './CategoryFilter';
import Ideas from './Ideas';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomeHeader />
        <CategoryFilter />
        <Ideas />
      </div>
    );
  }
}

export default App;
