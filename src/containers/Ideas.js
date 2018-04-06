import React, { Component } from 'react';
import { connect } from 'react-redux';

import IdeasCard from '../components/IdeaCard';
import IdeaForm from './IdeaForm';
import { getIdeas } from '../actions/ideas';
import './IdeaCard.css';

class Ideas extends Component {

  componentDidMount() {
    this.props.getIdeas()
  }

  render() {
    return (
      <div className="IdeaCard">
        <h1>Ideas</h1>
        {this.props.ideas.map(idea => <IdeaCard key={idea.id} idea={idea}/>)}
        < IdeaForm />
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
