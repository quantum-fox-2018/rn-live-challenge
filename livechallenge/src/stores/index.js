import { createStore, combineReducers, applyMiddleware } from 'redux'
import gameReducers from './game/reducers'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  game: gameReducers
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default store