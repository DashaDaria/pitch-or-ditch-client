const initialState = {
  category_id: '',
  name: '',
  content: '',
  author: '',
  votes: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_IDEA':
    return action.ideaForm;

    default:
    return state;
  }
}
