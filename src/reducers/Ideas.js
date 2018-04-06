export default (state = [], action) => {
  switch(action.type) {
    case 'GET_IDEAS_SUCCESS':
      return action.ideas;

    default:
      return state;
  }
}
