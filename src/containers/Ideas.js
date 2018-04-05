import React from 'react';

const Ideas = ({ideas}) => (
  <div>
    <h3>Ideas:</h3>
    {ideas.map(idea =>
    <div>
      <h4>{idea.name} || <span>{idea.category_id}</span></h4>
      <p>{idea.content}</p>
      <small>Submitted by: @{idea.author}</small>
    </div>)}
  </div>
);

export default Ideas;
