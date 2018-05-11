import {
  ADD_WORD,
  RANDOM_WORD
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

export const getRandomWord = (word) => {
  return dispatch => {
    dispatch(randomWord(word))
  }
}

const randomWord = (payload) => ({
  type: RANDOM_WORD,
  payload: payload
})


