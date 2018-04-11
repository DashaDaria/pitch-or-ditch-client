import React from 'react';
import { connect } from 'react-redux';

import IdeaCard from './IdeaCard';

const IdeaShow = ({ idea }) =>
  <div>
    <h3>Name: { idea.name }</h3>
  </div>

  const mapStateToProps = (state, ownProps) => {
    const idea = state.ideas.find(idea => idea.id === ownProps.match.params.ideaId)

    if(idea) {
      return { idea }
    } else {
      return { idea: {}}
    }
  }

export default connect(mapStateToProps)(IdeaShow);
