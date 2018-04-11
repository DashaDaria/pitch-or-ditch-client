import React, { Component } from 'react';
import { connect } from 'react-redux';


import IdeaCard from '../components/IdeaCard';
import IdeaForm from './IdeaForm';

import CategoryFilter from './CategoryFilter';

import { getIdeas, upvoteIdea, downvoteIdea, deleteIdea } from '../actions/ideas';
import './Ideas.css';

const getVisibleIdeas = (ideas, categoryFilter ) => {
  if(categoryFilter.length === 0) {
    return ideas
  } else {
    let filteredIdeas = []
    ideas.forEach( idea => {
      if(categoryFilter.indexOf(idea.category_id) !== -1 ){
      filteredIdeas.push(idea)
      }
    })
  }
}


class VisibleIdeasList extends Component {

  componentDidMount() {
    this.props.getIdeas()
  }

  render() {

    const { ideas, upvoteIdea, downvoteIdea, deleteIdea } = this.props
    return (
      <div className="search-bar">
        < CategoryFilter />
        <div className="IdeasContainer">
          {ideas.map(idea => <IdeaCard key={idea.id} idea={idea} upvoteIdea={upvoteIdea} downvoteIdea={downvoteIdea} deleteIdea={deleteIdea}/>)}
          <IdeaForm />
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ideas: state.ideas
  }
}


 export default connect(mapStateToProps, { getIdeas, upvoteIdea, downvoteIdea, deleteIdea } )(VisibleIdeasList);
