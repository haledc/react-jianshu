import { observable, action } from 'mobx'

interface Topic {
  id: number
  title: string
  imgUrl: string
}

interface Article {
  id: number
  title: string
  imgUrl: string
  desc: string
}

interface Recommend {
  id: string
  imgUrl: string
}

interface HomeInfo {
  topicList: Array<Topic>
  articleList: Array<Article>
  recommendList: Array<Recommend>
}

class HomeStore {
  @observable topicList: Array<Topic> = []
  @observable articleList: Array<Article> = []
  @observable recommendList: Array<Recommend> = []
  @observable articlePage: number = 1
  @observable isShowScroll: boolean = false

  @action.bound
  setHomeInfo(info: HomeInfo) {
    const { topicList, articleList, recommendList } = info
    this.setTopicList(topicList)
    this.setArticleList(articleList, false)
    this.setRecommendList(recommendList)
  }

  @action.bound
  setTopicList(list: Array<Topic>) {
    this.topicList = list
  }

  @action.bound
  setArticleList(list: Array<Article>, isConcat: boolean) {
    isConcat
      ? (this.articleList = this.articleList.concat(list))
      : (this.articleList = list)
  }

  @action.bound
  setRecommendList(list: Array<Recommend>) {
    this.recommendList = list
  }

  @action.bound
  setArticlePage(page: number) {
    this.articlePage = page
  }

  @action.bound
  setScrollShow(status: boolean) {
    this.isShowScroll = status
  }
}

export default HomeStore
