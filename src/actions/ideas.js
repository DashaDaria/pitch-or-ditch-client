
const setIdeas = ideas => {
  return {
    type: 'GET_IDEAS_SUCCESS',
    ideas
  }
}

const addIdea = idea => {
  return {
    type: 'CREATE_IDEA_SUCCESS',
    idea
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
// 
// export const createIdea = idea => {
//   return dispatch => {
//     return fetch('http://localhost:3001/api/ideas')
//       .then(response => response.json())
//       .then(ideas => dispatch(setIdeas(ideas)))
//       .catch(error => console.log(error));
  }
}
