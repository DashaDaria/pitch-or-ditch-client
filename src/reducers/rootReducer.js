import { combineReducers } from 'redux';
import ideas from './ideas';
import ideaForm from './ideaForm';

const rootReducer = combineReducers({
  ideas,
  ideaForm
});

export default rootReducer;
