import { combineReducers } from 'redux';
import ideas from './ideas';
import ideaForm from './ideaForm';

export default combineReducers({
  ideas,
  ideaForm
});
