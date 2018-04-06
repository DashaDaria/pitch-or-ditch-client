export default (state = [], action) => {
  switch(action.type) {
    case 'GET_IDEAS':
      return action.ideas;

    default:
      return state;
  }
}
