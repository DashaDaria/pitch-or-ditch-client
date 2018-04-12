import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import TeamListCard from '../components/TeamListCard';
import '../Ideas.css';


class TeamList extends Component {

  render(){
    return(
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Who</th>
              <th>Wrote</th>
            </tr>
            </thead>
            <tbody>
                {this.props.ideas.map(idea => <TeamListCard key={idea.author} idea={idea}/>)}
            </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps({ideas}) {
  return { ideas };
}

export default connect(mapStateToProps)(TeamList);
