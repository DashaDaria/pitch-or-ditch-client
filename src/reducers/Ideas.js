export default (state = [], action) => {
  switch(action.type) {
    case 'GET_IDEAS_SUCCESS':
      return action.ideas;

    case 'CREATE_IDEA_SUCCESS':
      return state.concat(action.idea);

    case 'UPVOTE_IDEA':
      index = state.findIndex(idea => quote.id === action.ideaId);
      idea = state[index];

      return [
        ...state.slice(0, index),
        Object.assign({}, idea, { votes: idea.votes += 1 }),
        ...state.slice(index + 1)
      ];

    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(idea => idea.id === action.ideaId);
      idea = state[index];
      if (idea.votes > 0) {
        return [
          ...state.slice(0, index),
          Object.assign({}, idea, { votes: idea.votes -= 1 }),
          ...state.slice(index + 1)
        ];
      }
      return state;

    default:
      return state;
  }
}
