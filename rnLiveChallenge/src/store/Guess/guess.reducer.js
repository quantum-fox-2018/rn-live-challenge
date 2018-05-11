import {
  FETCH_RANDOM_WORD,
  MATCH_RANDOM_WORD
} from './guess.action.type'

const initialState = {
  randomWords: [
    'background',
    'border',
    'clear',
    'cursor',
    'display',
    'flex',
    'font',
    'grid',
    'height',
    'width'
  ],
  winStatus: false,
  guessWords: ''
}

const reducers = ((state= {...initialState}, action) => {
  switch (action.type) {
    case FETCH_RANDOM_WORD:
      return state
    case MATCH_RANDOM_WORD:
      return ({
        ...state,
        winStatus: action.payload.winStatus,
        guessWords: action.payload.guessWords
      })
    default:
      return state
  }
})

export default reducers