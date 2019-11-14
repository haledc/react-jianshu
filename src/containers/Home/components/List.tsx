import React, { memo } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { ListItem, ListInfo, LoadMore } from '../StyleComponents'
import { requestMoreArticleList } from '../store/actions'
import { RootState } from '../../../store'
import { Article } from '../store/types'

const mapStateToProps = (state: RootState) => ({
  articleList: state.home.articleList,
  articlePage: state.home.articlePage
})

interface ListProps {
  articleList: Array<Article>
  articlePage: number
  requestMoreArticleList: typeof requestMoreArticleList
}

const List: React.FC<ListProps> = memo(({ articleList, articlePage, requestMoreArticleList }) => {
  return (
    <div>
      {articleList.map((item, index) => (
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
      <LoadMore onClick={() => requestMoreArticleList(articlePage + 1)}>
        阅读更多
      </LoadMore>
    </div>
  )
})

export default connect(mapStateToProps, { requestMoreArticleList })(List)
