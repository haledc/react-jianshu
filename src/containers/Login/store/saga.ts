import { put, takeEvery, call, select } from 'redux-saga/effects'
import * as request from '../../../request'
import { REQUEST_LOGIN, CHANGE_LOGIN_STATUS } from './types'

function* fetchLogin() {
  const username = yield select(state => state.login.user.username)
  const password = yield select(state => state.login.user.password)
  const { response, error } = yield call(request.login, {
    username,
    password
  })
  if (response) {
    yield put({
      type: CHANGE_LOGIN_STATUS,
      payload: { isLogin: true }
    })
  } else {
    console.log(error)
  }
}

export default function*() {
  yield takeEvery(REQUEST_LOGIN, fetchLogin)
}
