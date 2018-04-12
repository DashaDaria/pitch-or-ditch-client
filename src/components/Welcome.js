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

      <span className="challenge">
        The challenge: create an integrated marketing campaign for our sponsors that centers <br/>
        around the events during and leading up to the San Diego Comic-Con 2018.</span>
      <p></p>
      <p>
        <Button bsStyle="danger">Start Pitching</Button>
      </p>
    </Jumbotron>
  </div>
);

export default WelcomeHeader;
