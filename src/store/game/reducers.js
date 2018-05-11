import {
  GENERATE_BOARD
} from './action.types';

const initialState = {
  randomWords: [
    'flex',
    'font',
    'grid'
  ],
  gameWord: [],
  answerWord: '',
  gameStatus: 'Solve this',
  letterUsed: [],
  turnsLeft: 3
}

const gameReducers = (state = {...initialState}, action) => {
  switch (action.type) {
    case GENERATE_BOARD:
      return {
        ...state,
        gameWord: action.payload.puzzle,
        answerWord: action.payload.word
      }
    default:
      return state
  }
}

export default gameReducers