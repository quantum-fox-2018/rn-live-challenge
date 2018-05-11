import { GET_WORDS_SUCCESS, GET_WORDS_PENDING, GET_WORDS_ERROR } from './action.types'

const intialState = {
  loading: false,
  data: [],
  error: false
}

const wordsReducer = (state={...intialState}, action) => {
  switch (action.type) {
    case GET_WORDS_PENDING:
      return {
        ...state,
        loading: true
      }
    case GET_WORDS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case GET_WORDS_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state
  }
}

export default wordsReducer