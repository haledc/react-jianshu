import { fromJS } from 'immutable'
import { CHANGE_LOGIN_STATUS, REQUEST_LOGIN } from './actions'

const defaultState = fromJS({
  username: '',
  password: '',
  isLogin: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return state.merge({
        username: action.data.username,
        password: action.data.password
      })
    case CHANGE_LOGIN_STATUS:
      return state.set('isLogin', action.flag)
    default:
      return state
  }
}
