import { call, put, fork } from 'redux-saga/effects'

import * as request from '../../../request'
import { CHANGE_LIST } from './types'

function* getList() {
  const { response, error } = yield call(request.getList)
  if (response) {
    yield put({
      type: CHANGE_LIST,
      payload: {
        list: response,
        totalPage: Math.ceil(response.length / 10)
      }
    })
  } else {
    console.log(error)
  }
}

export default function*() {
  yield fork(getList)
}
