import { put, fork, takeEvery, select, call } from 'redux-saga/effects'
import * as request from '../../../assets/request'
import * as actions from './actions'

function* fetchHomeInfo() {
  const { response, error } = yield request.getHomeInfo()
  if (response) {
    yield put(actions.receiveHomeInfo(response))
  } else {
    console.log(error)
  }
}

function* fetchMoreArticleList() {
  const newPage = yield select(state => state.getIn(['home', 'articlePage']))
  const { response, error } = yield call(request.getMoreList, newPage)
  if (response) {
    yield put(actions.receiveMoreArticleList(response))
  } else {
    console.log(error)
  }
}

export default function*() {
  yield fork(fetchHomeInfo)
  yield takeEvery(actions.REQUEST_MORE_ARTICLE_LIST, fetchMoreArticleList)
}
