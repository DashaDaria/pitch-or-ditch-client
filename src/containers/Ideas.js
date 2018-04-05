import React from 'react';

const Ideas = ({ideas}) => (
  <div>
  <h3>Ideas:</h3>
  {ideas.map(idea => <p>{idea.name}</p>)}
  </div>
);

export default Ideas;
