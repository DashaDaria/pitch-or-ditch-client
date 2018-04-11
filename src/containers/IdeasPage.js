import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import IdeasList from '../components/IdeasList';
import IdeaShow from '../components/IdeaShow';


const IdeasPage = ({ match, ideas }) =>
  <div>
    <IdeasList  />
    <Route path={`${match.url}/:ideaId`} component={IdeaShow} />
    <Route exact path={match.url} render={() => (
      <h3>THIS IS THE IDEAS PAGE</h3>
    )} />
  </div>

  const mapStateToProps = (state) => {
    return {
      ideas: state.ideas
    }
  }

  export default connect(mapStateToProps)(IdeasPage);
