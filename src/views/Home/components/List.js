/*
 * @Author: Hale
 * @Description:
 * @Date: 2018-11-10
 */
import React, { memo } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { ListItem, ListInfo, LoadMore } from '../style'
import { actions } from '../store'

const mapState = state => ({
  articleList: state.getIn(['home', 'articleList']),
  articlePage: state.getIn(['home', 'articlePage'])
})

const mapDispatch = dispatch => ({
  getMoreList(page) {
    dispatch(actions.getMoreList(page))
  }
})

const List = memo(props => {
  const { articleList, articlePage, getMoreList } = props

  return (
    <div>
      {articleList.map((item, index) => (
        <Link key={index} to={'/detail/' + item.get('id')}>
          <ListItem>
            <img className="pic" src={item.get('imgUrl')} alt="pic" />
            <ListInfo>
              <h3 className="title">{item.get('title')}</h3>
              <p className="desc">{item.get('desc')}</p>
            </ListInfo>
          </ListItem>
        </Link>
      ))}
      <LoadMore onClick={() => getMoreList(articlePage)}>阅读更多</LoadMore>
    </div>
  )
})

export default connect(
  mapState,
  mapDispatch
)(List)
