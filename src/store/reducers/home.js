import { fromJS } from 'immutable'

import * as types from '../actionTypes'
import axios from 'axios'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_HOME_INFO:
      return state.merge({
        topicList: action.topicList,
        articleList: action.articleList,
        recommendList: action.recommendList
      })
    case types.ADD_HOME_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
      })
    case types.CHANGE_SCROLL_SHOW:
      return state.set('showScroll', action.flag)
    default:
      return state
  }
}

export const actionCreators = {
  changeHomeInfo(data) {
    return {
      type: types.CHANGE_HOME_INFO,
      topicList: fromJS(data.topicList),
      articleList: fromJS(data.articleList),
      recommendList: fromJS(data.recommendList)
    }
  },

  addHomeList(data, nextPage) {
    return {
      type: types.ADD_HOME_LIST,
      list: fromJS(data),
      nextPage
    }
  },

  changeScrollShow(flag) {
    return {
      type: types.CHANGE_SCROLL_SHOW,
      flag
    }
  },

  getHomeInfo() {
    return dispatch => {
      axios
        .get('/api/home.json')
        .then(res => {
          if (res.data.success) {
            dispatch(this.changeHomeInfo(res.data.data))
          }
        })
        .catch(e => console.log(e))
    }
  },

  getMoreList(page) {
    return dispatch => {
      axios
        .get(`/api/homeList.json?page=${page}`)
        .then(res => {
          if (res.data.success) {
            dispatch(this.addHomeList(res.data.data, page + 1))
          }
        })
        .catch(e => console.log(e))
    }
  },

  toggleScrollShow(flag) {
    return dispatch => {
      dispatch(this.changeScrollShow(flag))
    }
  }
}
