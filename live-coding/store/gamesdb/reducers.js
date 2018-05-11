import {
  GET_WORDS_SUCCESS,
  GET_WORDS_LOADING,
  GET_WORDS_ERROR
} from './actionTypes'

const initialState = {
  rondomWords: [
    'background',
    'border',
    'clear',
    'cursor',
    'display',
    'flex',
    'font',
    'grid',
    'height',
    'width'
  ],
  suggestWord: '',
  loading: false,
  error: {
    status: false,
    message: ''
  }
}

const gamesReducer = (state = {...initialState}, action) => {
  switch (action.type) {
    case GET_WORDS_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_WORDS_ERROR:
      let errObj = {
        status: true,
        message: action.payload.msg
      }
      return {
        ...state,
        error: {
          ...errObj
        },
        loading: false
      }

    case GET_WORDS_SUCCESS:
      return {
        ...state,
        suggestWord: action.payload,
        loading: false
      }

    default:
      return state
  }
}

export default gamesReducer