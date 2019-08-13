import * as types from './types'
import axios from 'axios'

export const changeLoginStatus = flag => ({
  type: types.CHANGE_LOGIN_STATUS,
  flag
})

export const login = (username, password) => dispatch => {
  axios
    .get(`/api/login.json?username=${username}&password=${password}`)
    .then(res => {
      if (res.data.success) {
        dispatch(changeLoginStatus(true))
      } else {
        alert('登录失败')
      }
    })
    .catch(error => console.log(error))
}
