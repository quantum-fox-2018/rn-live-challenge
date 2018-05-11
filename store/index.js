import { createStore, applyMiddleware, combineReducers } from "redux"
import usersReducers from './users/reducers'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  users: usersReducers
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store