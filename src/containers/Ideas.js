import React, { Component } from 'react';
import { connect } from 'react-redux';

import IdeaCard from '../components/IdeaCard';
import { getIdeas } from '../actions/ideas';
import './IdeaCard.css';

class Ideas extends Component {

  componentDidMount() {
    this.props.getIdeas()
  }

  render() {
    return (
      <div className="IdeaCard">
        {this.props.ideas.map(idea => <IdeaCard key={idea.id} idea={idea} />)}

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
