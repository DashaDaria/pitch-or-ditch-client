import React, { Component } from 'react';
import { connect } from 'react-redux';

class IdeaForm extends Component {

  render() {
    return (
      <div>
        Submit Your Idea

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    ideaForm: state.ideaForm
  })
}

 export default connect(mapStateToProps)(IdeaForm);
