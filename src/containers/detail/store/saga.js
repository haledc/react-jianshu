import { put, call, takeEvery, select } from 'redux-saga/effects'
import * as actions from './actions'
import * as request from '../../../assets/request'

function* fetchDetail() {
  const id = yield select(state => state.getIn(['detail', 'id']))
  const { response, error } = yield call(request.getDetail, id)
  if (response) {
    yield put(actions.receiveDetail(response))
  } else {
    console.log(error)
  }
}

export default function*() {
  yield takeEvery(actions.REQUEST_DETAIL, fetchDetail)
}
