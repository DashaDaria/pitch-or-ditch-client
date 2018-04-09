import React from 'react';

const IdeaCard = ({ idea, upvoteIdea, downvoteIdea }) =>

    <div className="IdeaCard" key={idea.id}>
      <h4>{idea.name} || <span>{idea.category_name}</span></h4>
      <p><em className="Votes">Votes: {idea.votes}</em></p>

        <button
          className="btnUp"
          type="button"
          onClick={() => upvoteIdea(idea)}>
          +
        </button>

        <button
          className="btnDown"
          type="button"
          onClick={() => downvoteIdea(idea)}>
          -
        </button>


      <p>{idea.content}</p>
      <small>Submitted by: @{idea.author}</small>
  </div>

export default IdeaCard;
