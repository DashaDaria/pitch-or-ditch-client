import { combineReducers } from 'redux';
import ideas from './ideas';
import ideaForm from './ideaForm';
import categoryFilter from './categoryFilter';

const rootReducer = combineReducers({
  ideas,
  ideaForm,
  categoryFilter
});

export default rootReducer;
