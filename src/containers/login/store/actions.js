export const REQUEST_LOGIN = 'login/REQUEST_LOGIN'
export const CHANGE_LOGIN_STATUS = 'login/CHANGE_LOGIN_STATUS'

export const requestLogin = data => ({
  type: REQUEST_LOGIN,
  data
})

export const changeLoginStatus = flag => ({
  type: CHANGE_LOGIN_STATUS,
  flag
})
