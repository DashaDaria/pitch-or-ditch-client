import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import IdeaCard from '../components/IdeaCard';
import IdeaForm from './IdeaForm';
import { getIdeas, upvoteIdea, downvoteIdea } from '../actions/ideas';
import './Ideas.css';

class Ideas extends Component {

  componentDidMount() {
    this.props.getIdeas()
  }

  render() {
    const { ideas, upvoteIdea, downvoteIdea } = this.props
    return (
      <div className="IdeasContainer">
        {ideas.map(idea => <IdeaCard key={idea.id} idea={idea} upvoteIdea={upvoteIdea} downvoteIdea={downvoteIdea}/>)}

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


 export default connect(mapStateToProps, { getIdeas, upvoteIdea, downvoteIdea } )(Ideas);
