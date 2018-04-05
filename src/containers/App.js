import React, { Component } from 'react';
import WelcomeHeader from '../components/WelcomeHeader';
import Ideas from './Ideas';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      ideas: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/api/ideas')
    .then(resp => resp.json())
    .then(ideas => this.setState({ideas}))
  }


  render() {
    return (
        <div>
          <WelcomeHeader />
          <Ideas ideas={this.state.ideas} />
        </div>
    );
  }
}

export default App;
