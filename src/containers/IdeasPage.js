import React, { Component } from 'react';
import { connect } from 'react-redux';


import IdeaCard from '../components/IdeaCard';
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
          {ideas.map(idea =>
              <IdeaCard key={idea.id}
              idea={idea}
              upvoteIdea={upvoteIdea}
              downvoteIdea={downvoteIdea}
              deleteIdea={deleteIdea}
            />
          )}
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
