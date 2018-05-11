import {
  SET_PLAYER,
  SET_WINNER
} from './game.actionTypes'

const initialState = {
  player : 'player 1',
  winner : 'player 1'
}

const reducers = (state={...initialState}, action) => {
  switch (action.type) {
    case SET_PLAYER:
    return ({
      ...state,
      player: action.payload
    })
    case SET_WINNER:
    return ({
      ...state,
      winner: action.payload
    })
    default:
    return state
  }
}

export default reducers
