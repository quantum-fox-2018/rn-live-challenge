import {
  ADD_WORD,
  RANDOM_WORD,
  RESET
} from './action.types'

export const addNewWord = (word) => {
  return dispatch => {
    dispatch(addWord(word))
  }
}

const addWord = (payload) => ({
  type: ADD_WORD,
  payload: payload
})

export const resetGame = () => {
  return dispatch => {
    dispatch(reset())
  }
}

const reset = () => ({
  type: RESET
})

export const getRandomWord = (word) => {
  return dispatch => {
    dispatch(randomWord(word))
  }
}

const randomWord = (payload) => ({
  type: RANDOM_WORD,
  payload: payload
})


