import React from 'react';
import { connect } from 'react-redux';

const IdeaShow = props => {

  return(
    <div>
      <h3>Idea Show Component</h3>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    ideaId: ownProps.match.params.ideaId
  }
}

export default connect(mapStateToProps)(IdeaShow);
