import {
  GENERATE_BOARD
} from './action.types';

export const generataBoard = (randomWords) => {
  return dispatch => {
    let index = Math.floor(Math.random() * 2)
    let arrWord = randomWords[index].split('')

    for (let i=0; i<=2; i++) {
      let spliceIdx = Math.floor(Math.random() * 4)
      arrWord.splice(spliceIdx, 1, '_')
    }

    dispatch(setBoard(arrWord))
  }
}

const setBoard = (gameWord) => ({
  type: GENERATE_BOARD,
  payload: gameWord
})