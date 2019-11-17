import { put, call, takeEvery, select } from 'redux-saga/effects'
import { REQUEST_DETAIL, RECEIVE_DETAIL } from './types'
import * as request from '../../../request'

function* fetchDetail() {
  const id = yield select(state => state.detail.id)
  const { response, error } = yield call(request.getDetail, id)
  if (response) {
    yield put({
      type: RECEIVE_DETAIL,
      payload: response
    })
  } else {
    console.log(error)
  }
}

export default function*() {
  yield takeEvery(REQUEST_DETAIL, fetchDetail)
}
