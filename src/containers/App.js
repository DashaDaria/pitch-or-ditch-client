import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/Navbar';
import WelcomeHeader from '../components/WelcomeHeader';
import IdeasPage from './IdeasPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <NavBar />
          <Route exact path='/' component={WelcomeHeader} />
          <Route path='/ideas' component={IdeasPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
