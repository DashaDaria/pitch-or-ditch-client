import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';


import IdeaCard from '../components/IdeaCard';
import IdeaShow from '../components/IdeaShow';
import IdeaForm from './IdeaForm';
import { getIdeas, upvoteIdea, downvoteIdea, deleteIdea } from '../actions/ideas';
import '../Ideas.css';

class IdeasPage extends Component {

  componentDidMount() {
    this.props.getIdeas()
  }

  render() {
    const { match, ideas, upvoteIdea, downvoteIdea, deleteIdea } = this.props
    return (
        <div className="IdeasContainer">
          <Route path={`${match.url}/:ideaId`} component={IdeaShow} />
          {ideas.map(idea =>
              <IdeaCard key={idea.id}
              idea={idea}
              upvoteIdea={upvoteIdea}
              downvoteIdea={downvoteIdea}
              deleteIdea={deleteIdea}
            />
          )}
          <IdeaForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ideas: state.ideas
  }
}


 export default connect(mapStateToProps, { getIdeas, upvoteIdea, downvoteIdea, deleteIdea } )(IdeasPage);
