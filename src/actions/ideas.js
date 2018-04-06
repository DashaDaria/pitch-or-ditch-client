

const getIdeas = ideas => {
  return {
    type: 'GET_IDEAS',
    ideas
  }
}

export const getIdeas = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/ideas')
    .then(resp => resp.json())
    .then(ideas => dispatch(getIdeas(ideas)))
    .catch(error => console.log(error));
  }
}
