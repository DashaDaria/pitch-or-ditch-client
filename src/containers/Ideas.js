import React, { Component } from 'react';
import { connect } from 'react-redux';

import './IdeaCard.css';

class Ideas extends Component {

  componentDidMount() {
    this.props.getIdeas()
  }

  render() {
    return (
      <div className="IdeaCard">
        <h1>Ideas</h1>
        {this.props.ideas.map(idea =>
        <IdeaCard key={idea.id} idea={idea}/>
      )}
      </div>
    );
  }
}

const Ideas = ({ideas}) => (
  <div>
    <h3>Ideas:</h3>
    {ideas.map(idea =>
    <div className="IdeaCard" key={idea.id}>
      <h4>{idea.name} || <span>{idea.category_name}</span></h4>
      <em className="Votes">Votes: {idea.votes}</em>
      <p>{idea.content}</p>
      <small>Submitted by: @{idea.author}</small>
    </div>)}
  </div>
);

export default Ideas;
