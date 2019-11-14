import {
  RECEIVE_HOME_INFO,
  REQUEST_MORE_ARTICLE_LIST,
  RECEIVE_MORE_ARTICLE_LIST,
  TOGGLE_SCROLL_SHOW,
  HomeState,
  HomeActionTypes
} from './types'

const initialState: HomeState = {
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  isShowScroll: false
}

export default (state = initialState, action: HomeActionTypes) => {
  switch (action.type) {
    case RECEIVE_HOME_INFO:
      const { articleList, topicList, recommendList } = action.payload
      return { ...state, articleList, topicList, recommendList }
    case REQUEST_MORE_ARTICLE_LIST:
      return { ...state, articlePage: action.payload.nextPage }
    case RECEIVE_MORE_ARTICLE_LIST:
      return {
        ...state,
        articleList: state.articleList.concat(action.payload.articleList)
      }
    case TOGGLE_SCROLL_SHOW:
      return { ...state, isShowScroll: action.payload.isShowScroll }
    default:
      return state
  }
}
