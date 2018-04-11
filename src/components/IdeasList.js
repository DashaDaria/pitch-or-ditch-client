import React from 'react';
import { Link } from 'react-router-dom';

import IdeasList from '../components/IdeasList';
import IdeaShow from '../components/IdeaShow';
import IdeaForm from './IdeaForm';
import { getIdeas, upvoteIdea, downvoteIdea, deleteIdea } from '../actions/ideas';
import './Ideas.css';

class IdeasPage extends Component {

  componentDidMount() {
    this.props.getIdeas()
  }

  render() {
    const { match, ideas, upvoteIdea, downvoteIdea, deleteIdea } = this.props
    return (
      <div className="IdeasContainer">
        <IdeasList ideas={}
          {ideas.map(idea => <IdeaCard key={idea.id} idea={idea} upvoteIdea={upvoteIdea} downvoteIdea={downvoteIdea} deleteIdea={deleteIdea}/>)}
          <Route path={`${match.url}/:ideaId`} component={IdeaShow} />
          <Route exact path={match.url} render={() => (
            <h3>Please select a Movie from the list.</h3>
          )} />
          <IdeaForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ideas: state.ideas,
  }
}


 export default connect(mapStateToProps, { getIdeas, upvoteIdea, downvoteIdea, deleteIdea } )(IdeasPage);


const IdeasPage = ({ ideas, upvoteIdea, downvoteIdea, deleteIdea }) => {
  const rednerIdeas = ideas.map(idea =>
  )
}

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
      <small>Submitted by: @{idea.author}</small><br />
      <Link to={`/ideas/${idea.id}`}>{idea.name}</Link>
  </div>

export default IdeaCard;
