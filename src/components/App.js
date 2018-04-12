import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './NavBar';
import Welcome from './Welcome';
import IdeasPage from '../containers/IdeasPage';
import IdeaForm from '../containers/IdeaForm';
import '../App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <NavBar />
          <Route exact path='/' component={Welcome} />
          <Route path='/ideas' component={IdeasPage}/>
          <Route path='/new' component={IdeaForm}/>
        </div>
      </Router>
    );
  }
}

export default App;
