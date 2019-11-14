import { put, fork, takeEvery, select, call } from 'redux-saga/effects'
import * as request from '../../../request'
import { REQUEST_MORE_ARTICLE_LIST } from './types'
import { receiveHomeInfo, receiveMoreArticleList } from './actions'

function* fetchHomeInfo() {
  const { response, error } = yield request.getHomeInfo()
  if (response) {
    yield put(receiveHomeInfo(response))
  } else {
    console.log(error)
  }
}

function* fetchMoreArticleList() {
  const newPage = yield select(state => state.home.articlePage)
  const { response, error } = yield call(request.getMoreList, newPage)
  if (response) {
    yield put(receiveMoreArticleList(response))
  } else {
    console.log(error)
  }
}

export default function* () {
  yield fork(fetchHomeInfo)
  yield takeEvery(REQUEST_MORE_ARTICLE_LIST, fetchMoreArticleList)
}
