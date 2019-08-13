import { put, takeEvery, call, select } from 'redux-saga/effects'
import * as request from '../../../assets/request'
import * as actions from './actions'

function* fetchLogin(data) {
  const username = yield select(state => state.getIn(['login', 'username']))
  const password = yield select(state => state.getIn(['login', 'password']))
  const { response, error } = yield call(request.login, {
    username,
    password
  })
  if (response) {
    yield put(actions.changeLoginStatus(true))
  } else {
    console.log(error)
  }
}

export default function*() {
  yield takeEvery(actions.REQUEST_LOGIN, fetchLogin)
}
