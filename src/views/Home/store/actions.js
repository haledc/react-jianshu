import { fromJS } from 'immutable'
import * as types from './types'
import axios from 'axios'

export const getHomeInfo = () => dispatch => {
  axios
    .get('/api/home.json')
    .then(res => {
      if (res.data.success) {
        dispatch(changeHomeInfo(res.data.data))
      }
    })
    .catch(error => console.log(error))
}

export const getMoreList = page => dispatch => {
  axios
    .get(`/api/homeList.json?page=${page}`)
    .then(res => {
      if (res.data.success) {
        dispatch(addHomeList(res.data.data, page + 1))
      }
    })
    .catch(error => console.log(error))
}

export const toggleScrollShow = flag => dispatch =>
  dispatch(changeScrollShow(flag))

const changeHomeInfo = data => ({
  type: types.CHANGE_HOME_INFO,
  topicList: fromJS(data.topicList),
  articleList: fromJS(data.articleList),
  recommendList: fromJS(data.recommendList)
})

const addHomeList = (data, nextPage) => ({
  type: types.ADD_HOME_LIST,
  list: fromJS(data),
  nextPage
})

const changeScrollShow = flag => ({
  type: types.CHANGE_SCROLL_SHOW,
  flag
})
