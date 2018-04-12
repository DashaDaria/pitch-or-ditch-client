import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import TeamListCard from '../components/TeamListCard';

class TeamList extends Component {

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
              {this.props.ideas.map(idea => <TeamListCard key={idea.author} idea={idea}/>)}
          </tbody>
      </Table>
    )
  }
}

function mapStateToProps({ideas}) {
  return { ideas };
}

export default connect(mapStateToProps)(TeamList);
