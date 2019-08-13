import { fromJS } from 'immutable'
import * as types from './types'

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
