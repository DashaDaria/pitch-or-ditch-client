import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import IdeasList from '../components/IdeasList';

const IdeasPage = ({ ideas }) =>
  <div>
    <IdeasList ideas={ideas} />
  </div>

  const mapStateToProps = (state) => {
    return {
      ideas: state.ideas
    }
  }

  export default connect(mapStateToProps)(IdeasPage);
