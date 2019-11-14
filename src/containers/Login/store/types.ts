export interface User {
  username: string
  password: string
}

export interface LoginState {
  user: User
  isLogin: boolean
}

export const REQUEST_LOGIN = 'login/REQUEST_LOGIN'
export const CHANGE_LOGIN_STATUS = 'login/CHANGE_LOGIN_STATUS'

export interface RequestLoginAction {
  type: typeof REQUEST_LOGIN
  payload: {
    user: User
  }
}

export interface ChangeLoginStatusAction {
  type: typeof CHANGE_LOGIN_STATUS
  payload: {
    isLogin: boolean
  }
}

export type LoginActionTypes = RequestLoginAction | ChangeLoginStatusAction
