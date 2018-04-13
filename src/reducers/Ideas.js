export default (state = [], action) => {

  switch(action.type) {
    case 'GET_IDEAS_SUCCESS':
      return action.ideas;

    case 'CREATE_IDEA_SUCCESS':
      return state.concat(action.idea);

    case 'DELETE_IDEA':
      return state.filter(idea => idea.id !== action.ideaId);

    case 'UPVOTE_IDEA':
      return state.map(idea => idea.id === action.ideaId ? Object.assign({}, idea, {votes: idea.votes + 1}) : idea)

    case 'DOWNVOTE_IDEA':
    return state.map(idea => idea.id === action.ideaId ? Object.assign({}, idea, {votes: idea.votes - 1}) : idea)

    default:
      return state;
  }
}
