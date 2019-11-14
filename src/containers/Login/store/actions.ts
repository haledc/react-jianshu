import {
  REQUEST_LOGIN,
  CHANGE_LOGIN_STATUS,
  User,
  RequestLoginAction,
  ChangeLoginStatusAction
} from './types'

export const requestLogin = (user: User): RequestLoginAction => ({
  type: REQUEST_LOGIN,
  payload: {
    user
  }
})

export const changeLoginStatus = (
  isLogin: boolean
): ChangeLoginStatusAction => ({
  type: CHANGE_LOGIN_STATUS,
  payload: {
    isLogin
  }
})

