import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import Ideas from './reducers/Ideas';
import IdeaForm from './reducers/IdeaForm'

const reducers = combineReducers({
  Ideas,
  IdeaForm
});

const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
  );
