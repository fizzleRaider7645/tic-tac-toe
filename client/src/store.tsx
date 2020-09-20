import { createStore } from 'redux'
import { combineReducers } from 'redux'
import gamesReducer from './reducers/Games';
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  games: gamesReducer
});


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeWithDevTools()
);

export default store