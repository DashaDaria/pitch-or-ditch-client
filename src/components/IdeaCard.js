import React from 'react';

const IdeaCard = ({ idea }) => (
    <div className="IdeaCard" key={idea.id}>
      <h4>{idea.name} || <span>{idea.category_name}</span></h4>
      <em className="Votes">Votes: {idea.votes}</em>
      <p>{idea.content}</p>
      <small>Submitted by: @{idea.author}</small>
  </div>
);

export default IdeaCard;
