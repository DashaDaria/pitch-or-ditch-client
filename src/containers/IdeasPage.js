import React, { Component } from 'react';
import { connect } from 'react-redux';

import TeamList from './TeamList';
import IdeaCard from '../components/IdeaCard';
import { getIdeas, upvoteIdea, downvoteIdea, deleteIdea } from '../actions/ideas';
import '../Ideas.css';

class IdeasPage extends Component {

  componentDidMount() {
    this.props.getIdeas()
  }

  render() {
    const { ideas, upvoteIdea, downvoteIdea, deleteIdea } = this.props
    return (

        <div className="IdeasContainer">
          <TeamList />
          {ideas.map(idea =>
              <IdeaCard key={idea.id}
              idea={idea}
              upvoteIdea={upvoteIdea}
              downvoteIdea={downvoteIdea}
              deleteIdea={deleteIdea}/>
            )}
        </div>
    );
  }
}

function mapStateToProps({ideas}) {
  return { ideas };
}


 export default connect(mapStateToProps, { getIdeas, upvoteIdea, downvoteIdea, deleteIdea } )(IdeasPage);
