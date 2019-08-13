import { fromJS } from 'immutable'

export const RECEIVE_HOME_INFO = 'home/RECEIVE_HOME_INFO'
export const RECEIVE_MORE_ARTICLE_LIST = 'home/RECEIVE_MORE_ARTICLE_LIST'
export const REQUEST_MORE_ARTICLE_LIST = 'home/REQUEST_MORE_ARTICLE_LIST'
export const TOGGLE_SCROLL_SHOW = 'home/TOGGLE_SCROLL_SHOW'

export const receiveHomeInfo = data => ({
  type: RECEIVE_HOME_INFO,
  topicList: fromJS(data.topicList),
  articleList: fromJS(data.articleList),
  recommendList: fromJS(data.recommendList)
})

export const requestMoreArticleList = nextPage => ({
  type: REQUEST_MORE_ARTICLE_LIST,
  nextPage
})

export const receiveMoreArticleList = data => ({
  type: RECEIVE_MORE_ARTICLE_LIST,
  list: fromJS(data)
})

export const toggleScrollShow = flag => ({
  type: TOGGLE_SCROLL_SHOW,
  flag
})
