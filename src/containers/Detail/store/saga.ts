import { put, call, takeEvery, select } from 'redux-saga/effects'
import { REQUEST_DETAIL } from './types'
import { receiveDetail } from './actions'
import * as request from '../../../request'

function* fetchDetail() {
  const id = yield select(state => state.detail.id)
  const { response, error } = yield call(request.getDetail, id)
  if (response) {
    yield put(receiveDetail(response))
  } else {
    console.log(error)
  }
}

export default function* () {
  yield takeEvery(REQUEST_DETAIL, fetchDetail)
}
