import { createStore } from 'redux'
import { combineReducers } from 'redux'
import Games from './reducers/Games';
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  Games
});

const store = createStore(
  reducers,
  composeWithDevTools()
);

export default store