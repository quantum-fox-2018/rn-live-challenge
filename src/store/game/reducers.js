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
  gameStatus: false,
  letterUsed: [],
  turnsLeft: 3
}

const gameReducers = (state = {...initialState}, action) => {
  switch (action.type) {
    case GENERATE_BOARD:
      return {
        ...state,
        gameWord: action.payload
      }
    default:
      return state
  }
}

export default gameReducers