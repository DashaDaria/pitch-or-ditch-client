import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

class TeamList extends Component {

  renderTeam(idea){
    return(
      <tr key={idea.author}>
        <td>{idea.author}</td>
        <td>{idea.name}</td>
      </tr>
    )
  }

  render(){
    return(
      <Table>
        <thead>
          <tr>
            <th>Who</th>
            <th>Wrote</th>
          </tr>
          </thead>
          <tbody>
              {this.props.ideas.map(this.renderTeam)}
          </tbody>
      </Table>
    )
  }
}

function mapStateToProps({ideas}) {
  return { ideas };
}

export default connect(mapStateToProps)(TeamList);
