import { ADD_WORD, RANDOM_WORD, RESET } from './action.types'

const initialState = {
  wordUse: [],
  turnLeft: [],
  randomWords: ['FLEX', 'WIDTH', 'STYLE'],
  selectedWord: ''
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
    case RESET:
      return {
        ...initialState
      }
    default: 
    return state
  }
}

export default reducers