import { ADD_WORD, RANDOM_WORD } from './action.types'

const initialState = {
  wordUse: [],
  turnLeft: [],
  randomWords: ['height', 'width', 'flex'],
  selectedWord: 'random'
}

const reducers = (state = {...initialState}, action) => {
  switch (action.type) {
    case ADD_WORD: 
    return {
      ...state,
      wordUse: [...state.wordUse, action.payload]
    }
    case RANDOM_WORD:
      return {
        ...state,
        selectedWord: action.payload
      }
    default: 
    return state
  }
}

export default reducers