import {
  SET_PLAYER,
  SET_WINNER
} from './game.actionTypes'

// import {db} from '../../firebase'

export const setPlayer = (input) => {
  console.log('useraction===',input)
  return dispatch => {
    // db.ref('/user').push(input).then(()=>{
      // })
    dispatch(addNewPlayer(input))
    
  }
}

export const setWinner = (input) => {
  return dispatch => {
    dispatch(setPlayerWinner(input))
    
  }
}

const addNewPlayer = (data) => ({
  type: SET_PLAYER,
  payload: data
})

const setPlayerWinner = (data) => ({
  type: SET_WINNER,
  payload: data
})