import { put, takeEvery, call, select } from 'redux-saga/effects'
import * as request from '../../../request'
import { changeLoginStatus } from './actions'
import { User, REQUEST_LOGIN } from './types'

function* fetchLogin(user: User) {
  const username = yield select(state => state.login.user.username)
  const password = yield select(state => state.login.user.password)
  const { response, error } = yield call(request.login, {
    username,
    password
  })
  if (response) {
    yield put(changeLoginStatus(true))
  } else {
    console.log(error)
  }
}

export default function* () {
  // @ts-ignore
  yield takeEvery(REQUEST_LOGIN, fetchLogin)
}
