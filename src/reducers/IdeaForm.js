const initialState = {
  category_id: null,
  name: '',
  content: '',
  author: '',
  votes: 0
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_IDEA':
    return action.ideaForm;

    default:
    return state;
  }
}
