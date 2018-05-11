import { createStore, applyMiddleware, combineReducers } from "redux"
import usersReducers from './users/reducers'
import wordsReducers from './words/reducers'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  users: usersReducers,
  words: wordsReducers
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store