import {
  GET_WORDS_SUCCESS
} from './actionTypes';

const loading = () => ({
  type: LIST_MOVIES_LOADING
})

const error = (payload) => ({
  type: LIST_MOVIES_ERROR,
  payload: payload
})

const GetWordGames = (payload) => ({
  type: GET_WORDS_SUCCESS,
  payload: payload
})

export const doneWishlist = (obj) => {
  return dispatch => {
    dispatch(loading())
    dispatch(GetWordGames(obj))
  }
}