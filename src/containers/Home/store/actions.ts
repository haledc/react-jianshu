import {
  Article,
  RECEIVE_HOME_INFO,
  RECEIVE_MORE_ARTICLE_LIST, ReceiveHomeInfoAction, ReceiveMoreArticleListAction, Recommend,
  REQUEST_MORE_ARTICLE_LIST, RequestMoreArticleListAction,
  TOGGLE_SCROLL_SHOW, ToggleScrollShowAction, Topic
} from './types'

interface HomeInfo {
  topicList: Array<Topic>
  recommendList: Array<Recommend>
  articleList: Array<Article>
}

export const receiveHomeInfo = ({ topicList, recommendList, articleList }: HomeInfo): ReceiveHomeInfoAction => ({
  type: RECEIVE_HOME_INFO,
  payload: {
    topicList,
    recommendList,
    articleList
  }
})

export const requestMoreArticleList = (nextPage: number): RequestMoreArticleListAction => ({
  type: REQUEST_MORE_ARTICLE_LIST,
  payload: {
    nextPage
  }
})

export const receiveMoreArticleList = (articleList: Array<Article>): ReceiveMoreArticleListAction => ({
  type: RECEIVE_MORE_ARTICLE_LIST,
  payload: {
    articleList
  }
})

export const toggleScrollShow = (isShowScroll: boolean): ToggleScrollShowAction => ({
  type: TOGGLE_SCROLL_SHOW,
  payload: {
    isShowScroll
  }
})
