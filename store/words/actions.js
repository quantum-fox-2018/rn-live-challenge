import { GET_WORDS_PENDING, GET_WORDS_SUCCESS, GET_WORDS_ERROR } from './action.types'
import { db }from '../../firebase'

export const getWords = () => {
  return dispatch => {
    dispatch(getWordsPending())
    // db.ref('cssgame/words').on('value', (snapshot) => {
    //   let wordsArray = []
    //   snapshot.forEach(data => {
    //     wordsArray.push(data.val())
    //   })
    //   dispatch(getWordsSuccess(wordsArray))
    // })
    const words = ['background', 'border', 'clear', 'cursor', 'display', 'flex', 'font', 'grid', 'height', 'width']
    dispatch(getWordsSuccess(words))
  }
}

const getWordsPending = () => ({
  type: GET_WORDS_PENDING
})

const getWordsSuccess = (data) => ({
  type: GET_WORDS_SUCCESS,
  payload: data
})

const getWordsError = (error) => ({
  type: GET_WORDS_ERROR,
  payload: error
})