import { put, fork, takeEvery, select, call } from 'redux-saga/effects'
import * as request from '../../../request'
import {
  REQUEST_MORE_ARTICLE_LIST,
  RECEIVE_HOME_INFO,
  RECEIVE_MORE_ARTICLE_LIST
} from './types'

function* fetchHomeInfo() {
  const { response, error } = yield request.getHomeInfo()
  if (response) {
    yield put({
      type: RECEIVE_HOME_INFO,
      payload: response
    })
  } else {
    console.log(error)
  }
}

function* fetchMoreArticleList() {
  const newPage = yield select(state => state.home.articlePage)
  const { response, error } = yield call(request.getMoreList, newPage)
  if (response) {
    yield put({
      type: RECEIVE_MORE_ARTICLE_LIST,
      payload: { articleList: response }
    })
  } else {
    console.log(error)
  }
}

export default function*() {
  yield fork(fetchHomeInfo)
  yield takeEvery(REQUEST_MORE_ARTICLE_LIST, fetchMoreArticleList)
}
