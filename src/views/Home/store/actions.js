import { fromJS } from 'immutable'
import * as types from './types'
import axios from 'axios'

export const getHomeInfo = () => {
  return dispatch => {
    axios
      .get('/api/home.json')
      .then(res => {
        if (res.data.success) {
          dispatch(changeHomeInfo(res.data.data))
        }
      })
      .catch(e => console.log(e))
  }
}

export const getMoreList = page => {
  return dispatch => {
    axios
      .get(`/api/homeList.json?page=${page}`)
      .then(res => {
        if (res.data.success) {
          dispatch(addHomeList(res.data.data, page + 1))
        }
      })
      .catch(e => console.log(e))
  }
}

export const toggleScrollShow = flag => {
  return dispatch => {
    dispatch(changeScrollShow(flag))
  }
}

const changeHomeInfo = data => {
  return {
    type: types.CHANGE_HOME_INFO,
    topicList: fromJS(data.topicList),
    articleList: fromJS(data.articleList),
    recommendList: fromJS(data.recommendList)
  }
}

const addHomeList = (data, nextPage) => {
  return {
    type: types.ADD_HOME_LIST,
    list: fromJS(data),
    nextPage
  }
}

const changeScrollShow = flag => {
  return {
    type: types.CHANGE_SCROLL_SHOW,
    flag
  }
}
