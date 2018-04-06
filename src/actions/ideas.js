
const setIdeas = ideas => {
  return {
    type: 'GET_IDEAS_SUCCESS',
    ideas
  }
}

export const getIdeas = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/ideas')
      .then(response => response.json())
      .then(ideas => dispatch(setIdeas(ideas)))
      .catch(error => console.log(error));
  }
}
