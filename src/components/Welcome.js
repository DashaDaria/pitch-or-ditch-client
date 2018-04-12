import React from 'react';
import '../App.css';
import { Jumbotron, Button } from 'react-bootstrap';
import PDlogo2 from '../PDlogo2.png'

const WelcomeHeader = () => (
  <div className="App">
    <Jumbotron>
      <img src={PDlogo2} className="App-logo" alt="logo" />
      <h1>Pitch or Ditch</h1>
      <p className="App-title"> a virtual brainstorming session for your business</p>
      <p>Goal: San Diego Comic-Con 2018</p>
      <p>
        <Button bsStyle="danger">Start Pitching</Button>
      </p>
    </Jumbotron>
  </div>
);

export default WelcomeHeader;
