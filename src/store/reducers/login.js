import { fromJS } from 'immutable'
import axios from 'axios'

import * as types from '../actionTypes'

const defaultState = fromJS({
  isLogin: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_LOGIN_STATUS:
      return state.set('isLogin', action.flag)
    default:
      return state
  }
}

export const actionCreators = {
  changeLoginStatus(flag) {
    return {
      type: types.CHANGE_LOGIN_STATUS,
      flag
    }
  },
  login(username, password) {
    return dispatch => {
      axios.get(`/api/login.json?username=${username}&password=${password}`)
        .then(res => {
          if (res.data.success) {
            dispatch(this.changeLoginStatus(true))
          } else {
            alert('登录失败')
          }
        })
        .catch(e => console.log(e))
    }
  }
}