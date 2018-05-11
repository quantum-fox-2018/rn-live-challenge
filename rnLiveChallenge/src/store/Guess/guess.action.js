import {
  FETCH_RANDOM_WORD,
  MATCH_RANDOM_WORD
} from './guess.action.type'

export const fetchRandomWord = (payload) => ({
  type: FETCH_RANDOM_WORD,
  payload
})

export const matchWords = (payload) => ({
  type: MATCH_RANDOM_WORD,
  payload
})