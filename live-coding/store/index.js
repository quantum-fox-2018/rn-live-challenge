import { createStore, combineReducers } from 'redux'

import gamesReducer from './gamesdb/reducers'

const reducer = combineReducers({
  movies: gamesReducer
})

const store = createStore(
  reducer
)

export default store