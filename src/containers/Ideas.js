import React, { Component } from 'react';
import { connect } from 'react-redux';

import IdeaCard from '../components/IdeaCard';
import IdeaForm from './IdeaForm';
import { getIdeas } from '../actions/ideas';
import './Ideas.css';

class Ideas extends Component {

  componentDidMount() {
    this.props.getIdeas()
  }

  render() {
    return (
      <div className="IdeasContainer">
        {this.props.ideas.map(idea => <IdeaCard key={idea.id} idea={idea} />)}

        <IdeaForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    ideas: state.ideas
  })
}

 export default connect(mapStateToProps, { getIdeas })(Ideas);
