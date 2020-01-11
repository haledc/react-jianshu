import React from 'react'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import { ListItem, ListInfo, LoadMore } from '../StyleComponents'
import { getMoreList } from '../../../request'
import { useStore } from '../../../hooks'

const List = observer(() => {
  const { homeStore } = useStore()
  const { articleList, articlePage, setArticlePage, setArticleList } = homeStore

  const fetchMoreArticleList = async () => {
    const list = await getMoreList(articlePage)
    setArticleList(list, true)
    setArticlePage(articlePage + 1)
  }

  return (
    <div>
      {articleList.map((item: any, index: number) => (
        <Link key={index} to={'/detail/' + item.id}>
          <ListItem>
            <img className="pic" src={item.imgUrl} alt="pic" />
            <ListInfo>
              <h3 className="title">{item.title}</h3>
              <p className="desc">{item.desc}</p>
            </ListInfo>
          </ListItem>
        </Link>
      ))}
      <LoadMore onClick={fetchMoreArticleList}>阅读更多</LoadMore>
    </div>
  )
})

export default List
