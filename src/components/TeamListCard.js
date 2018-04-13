import React, { Component } from 'react';

class TeamListCard extends Component {
  constructor(props){
    super(props)

    this.state = {
      counter: 0
    }
  }

    handleChange = () => {
      this.setState({
        counter: this.state.counter + 1
      })
    }

  render(){
    return(
      <tr>
        <td>{this.props.idea.author}</td>
        <td>{this.props.idea.name}</td>
      </tr>
    )
  }
}


export default TeamListCard


// <button onClick={this.handleChange}>
//   +
// </button> {this.state.counter}</td>
