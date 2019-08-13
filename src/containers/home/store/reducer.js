import { fromJS } from 'immutable'
import {
  RECEIVE_HOME_INFO,
  REQUEST_MORE_ARTICLE_LIST,
  RECEIVE_MORE_ARTICLE_LIST,
  TOGGLE_SCROLL_SHOW
} from './actions'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_HOME_INFO:
      return state.merge({
        topicList: action.topicList,
        articleList: action.articleList,
        recommendList: action.recommendList
      })
    case REQUEST_MORE_ARTICLE_LIST:
      return state.set('articlePage', action.nextPage)
    case RECEIVE_MORE_ARTICLE_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(action.list)
      })
    case TOGGLE_SCROLL_SHOW:
      return state.set('showScroll', action.flag)
    default:
      return state
  }
}