import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, ButtonToolbar } from 'react-bootstrap';


const IdeaCard = ({ idea, upvoteIdea, downvoteIdea, deleteIdea }) =>
    <div className="IdeaCard" key={idea.id}>
      <div className="votes">
        <Badge>{idea.votes}</Badge>
        <p>votes</p>
      </div>
      <h4>{idea.name} || <span>{idea.category_name}</span></h4>
      <p>{idea.content}</p>
      <small>Submitted by: @{idea.author}</small><br />

      <Button className="add-margin" bsSize="small" bsStyle="success" type="button" onClick={() => upvoteIdea(idea)}> + </Button>
      <Button className="add-margin" bsSize="small" bsStyle="warning" type="button" onClick={() => downvoteIdea(idea)}> - </Button>
      <Button className="add-margin" bsSize="small" bsStyle="default" type="button" onClick={() => deleteIdea(idea)}> x </Button>



    </div>

export default IdeaCard;
