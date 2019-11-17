import React, { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { ListItem, ListInfo, LoadMore } from '../StyleComponents'
import { RootState } from '../../../store'
import { REQUEST_MORE_ARTICLE_LIST } from '../store'

const List: React.FC = memo(() => {
  const articleList = useSelector((state: RootState) => state.home.articleList)
  const articlePage = useSelector((state: RootState) => state.home.articlePage)

  const dispatch = useDispatch()

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
      <LoadMore
        onClick={() =>
          dispatch({
            type: REQUEST_MORE_ARTICLE_LIST,
            payload: { nextPage: articlePage + 1 }
          })
        }
      >
        阅读更多
      </LoadMore>
    </div>
  )
})

export default List
