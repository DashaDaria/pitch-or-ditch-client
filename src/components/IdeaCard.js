import React from 'react';

const IdeaCard = ({ idea, upvoteIdea, downvoteIdea }) =>

    <div className="IdeaCard" key={idea.id}>
      <h4>{idea.name} || <span>{idea.category_name}</span></h4>
      <em className="Votes">Votes: {idea.votes}</em>

      <button
        type="button"
        onClick={() => upvoteIdea(idea.id)}>
        Upvote
      </button>

      <button
        type="button"
        onClick={() => downvoteIdea(idea.id)}>
        Downvote
      </button>


      <p>{idea.content}</p>
      <small>Submitted by: @{idea.author}</small>
  </div>

export default IdeaCard;
