import {
  PRESS_KEY,
  GENERATE_BOARD
} from './action.types';

export const generataBoard = (randomWords) => {
  return dispatch => {
    let index = Math.floor(Math.random() * 2)
    let arrWord = randomWords[index].split('')
    let answer = randomWords[index]

    for (let i=0; i<=2; i++) {
      let spliceIdx = Math.floor(Math.random() * 4)
      arrWord.splice(spliceIdx, 1, '_')
    }

    dispatch(setBoard({
      word: answer,
      puzzle: arrWord
    }))
  }
}

export const inputKey = (key) => {
  return dispatch => {
    console.log('pressed', key)
  }
}

const setInput = (key) => ({
  type: PRESS_KEY,
})

const setBoard = (gameWord) => ({
  type: GENERATE_BOARD,
  payload: gameWord
})