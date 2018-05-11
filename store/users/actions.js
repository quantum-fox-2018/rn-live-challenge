import { GET_USER_DATA_PENDING, GET_USER_DATA_SUCCESS, GET_USER_DATA_ERROR } from './action.types'
import { db }from '../../firebase'

export const getUsers = () => {
  return dispatch => {
    dispatch(getUsersPending())
    db.ref('cssgame/users').on('value', (snapshot) => {
      let usersArray = []
      snapshot.forEach(data => {
        let obj = {
          ...data.val(),
          key: data.key
        }
        usersArray.push(obj)
      })
      dispatch(getUsersSuccess(usersArray))
    })
  }
}

const getUsersPending = () => ({
  type: GET_USER_DATA_PENDING
})

const getUsersSuccess = (data) => ({
  type: GET_USER_DATA_SUCCESS,
  payload: data
})

const getUsersSuccess = (error) => ({
  type: GET_USER_DATA_ERROR,
  payload: error
})