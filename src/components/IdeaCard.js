import React from 'react';
import { Link } from 'react-router-dom';

const IdeaCard = ({ idea, upvoteIdea, downvoteIdea, deleteIdea }) =>

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

        <button
          className="btnDelete"
          type="button"
          onClick={() => deleteIdea(idea)}>
          x
        </button>


      <p>{idea.content}</p>
      <small>Submitted by: @{idea.author}</small>
      <Link key={idea.id} to={`/ideas/$idea.id`}>{idea.name}
      </Link>
  </div>

export default IdeaCard;
