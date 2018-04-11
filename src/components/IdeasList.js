import React, { Component } from 'react';
import { connect } from 'react-redux';

import IdeaShow from '../components/IdeaShow';
import IdeaCard from './IdeaCard';
import IdeaForm from '../containers/IdeaForm';
import { getIdeas, upvoteIdea, downvoteIdea, deleteIdea } from '../actions/ideas';
import '../containers/Ideas.css';

class IdeasList extends Component {

  componentDidMount() {
    this.props.getIdeas()
  }

  render() {
    const { match, ideas, upvoteIdea, downvoteIdea, deleteIdea } = this.props
    return (
      <div className="IdeasContainer">
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
    ideas: state.ideas,
  }
}


 export default connect(mapStateToProps, { getIdeas, upvoteIdea, downvoteIdea, deleteIdea } )(IdeasList);
