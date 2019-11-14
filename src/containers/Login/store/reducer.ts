import { CHANGE_LOGIN_STATUS, REQUEST_LOGIN, LoginState, LoginActionTypes } from './types'

const initialState: LoginState = {
  user: {
    username: '',
    password: ''
  },
  isLogin: false
}

export default (state = initialState, action: LoginActionTypes) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return { ...state, user: action.payload.user }
    case CHANGE_LOGIN_STATUS:
      return { ...state, isLogin: action.payload.isLogin }
    default:
      return state
  }
}
