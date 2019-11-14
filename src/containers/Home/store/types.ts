export interface Topic {
  id: number,
  title: string
  imgUrl: string
}

export interface Article {
  id: number,
  title: string
  imgUrl: string
  desc: string
}

export interface Recommend {
  id: string
  imgUrl: string
}

export interface HomeState {
  topicList: Array<Topic>
  articleList: Array<Article>
  recommendList: Array<Recommend>
  articlePage: number
  isShowScroll: boolean
}

export const RECEIVE_HOME_INFO = 'home/RECEIVE_HOME_INFO'
export const RECEIVE_MORE_ARTICLE_LIST = 'home/RECEIVE_MORE_ARTICLE_LIST'
export const REQUEST_MORE_ARTICLE_LIST = 'home/REQUEST_MORE_ARTICLE_LIST'
export const TOGGLE_SCROLL_SHOW = 'home/TOGGLE_SCROLL_SHOW'

export interface ReceiveHomeInfoAction {
  type: typeof RECEIVE_HOME_INFO
  payload: {
    topicList: Array<Topic>
    articleList: Array<Article>
    recommendList: Array<Recommend>
  }
}

export interface RequestMoreArticleListAction {
  type: typeof REQUEST_MORE_ARTICLE_LIST,
  payload: {
    nextPage: number
  }
}

export interface ReceiveMoreArticleListAction {
  type: typeof RECEIVE_MORE_ARTICLE_LIST
  payload: {
    articleList: Array<Article>
  }
}

export interface ToggleScrollShowAction {
  type: typeof TOGGLE_SCROLL_SHOW,
  payload: {
    isShowScroll: boolean
  }
}

export type HomeActionTypes =
  ReceiveHomeInfoAction
  | RequestMoreArticleListAction
  | ReceiveMoreArticleListAction
  | ToggleScrollShowAction
