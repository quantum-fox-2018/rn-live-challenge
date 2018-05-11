import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import reducersGame from './game/game.reducers'

const reducers = combineReducers({
  data: reducersGame
})

const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

export default store