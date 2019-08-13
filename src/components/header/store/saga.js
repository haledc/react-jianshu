import { call, put, fork } from 'redux-saga/effects'
import { fromJS } from 'immutable'

import * as request from '../../../assets/request'
import { CHANGE_LIST } from './actions'

function* getList() {
  const { response, error } = yield call(request.getList)
  if (response) {
    yield put({
      type: CHANGE_LIST,
      data: fromJS(response),
      totalPage: Math.ceil(response.length / 10)
    })
  } else {
    console.log(error)
  }
}

export default function*() {
  yield fork(getList)
}
