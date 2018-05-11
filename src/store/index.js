import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import gameReducers from './game/reducers';

const reducers = combineReducers({
  game: gameReducers
})

const store = createStore(
  reducers, applyMiddleware(thunk, logger)
)

export default store