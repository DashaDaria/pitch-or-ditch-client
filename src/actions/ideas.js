
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

export const createIdea = idea => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/categories/${idea.category_id}/ideas`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ idea: idea })
    })
      .then(response => response.json())
      .then(idea => {
        dispatch(addIdea(idea))
      })
      .catch(error => console.log(error))
  }
}


export const upvoteIdea = ideaId => {
  return {
    type: 'UPVOTE_QUOTE',
    IdeaId
  }
}

export const downvoteIdea = ideaId => {
  return {
    type: 'DOWNVOTE_QUOTE',
    IdeaId
  }
}
