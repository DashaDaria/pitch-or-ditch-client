export const updateIdeaForm = ideaForm => {
  return {
    type: 'ADD_IDEA',
    ideaForm
  }
}

export const resetIdeaForm = () => {
  return {
    type: 'RESET_IDEA_FORM'
  }
}
