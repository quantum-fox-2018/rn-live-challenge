import { createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import guessReducer from './Guess/guess.reducer'

const reducers = combineReducers({
  guess: guessReducer
})

const store = createStore({
  reducers,
  applyMiddleware(thunk)
})

export default store