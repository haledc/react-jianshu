import * as types from './types'
import axios from 'axios'

export const changeLoginStatus = flag => {
  return {
    type: types.CHANGE_LOGIN_STATUS,
    flag
  }
}

export const login = (username, password) => {
  return dispatch => {
    axios
      .get(`/api/login.json?username=${username}&password=${password}`)
      .then(res => {
        if (res.data.success) {
          dispatch(changeLoginStatus(true))
        } else {
          alert('登录失败')
        }
      })
      .catch(e => console.log(e))
  }
}
