let initialState = {
    categoryFilter: []
  }

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY_FILTER':
      return Object.assign({}, state, { categoryFilter: [...state.categoryFilter, action.categoryId]})

    default:
      return state;
    }
  }
