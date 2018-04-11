import React, { Component } from 'react';

import WelcomeHeader from '../components/WelcomeHeader';
import CategoryFilter from './CategoryFilter';
import VisibleIdeasList from './VisibleIdeasList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomeHeader />
        <VisibleIdeasList />
      </div>
    );
  }
}

export default App;
