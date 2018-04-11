import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import NavBar from '../components/Navbar';
import WelcomeHeader from '../components/WelcomeHeader';
import IdeasPage from './IdeasPage';
import Team from '../components/Team';
import IdeaForm from './IdeaForm';
import '../App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <NavBar />
          <Route exact path='/' component={WelcomeHeader} />
          <Route path='/ideas' component={IdeasPage}/>
          <Route path='/new' component={IdeaForm}/>
          <Route path='/team' component={Team} />
        </div>
      </Router>
    );
  }
}

export default App;
