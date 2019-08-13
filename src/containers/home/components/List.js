import React, { memo } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { ListItem, ListInfo, LoadMore } from '../style'
import { requestMoreArticleList } from '../store/actions'

const mapStateToProps = state => ({
  articleList: state.getIn(['home', 'articleList']),
  articlePage: state.getIn(['home', 'articlePage'])
})

const List = memo(({ articleList, articlePage, requestMoreArticleList }) => {
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
      <LoadMore onClick={() => requestMoreArticleList(articlePage + 1)}>
        阅读更多
      </LoadMore>
    </div>
  )
})

List.propTypes = {
  articleList: PropTypes.object.isRequired,
  articlePage: PropTypes.number.isRequired,
  requestMoreArticleList: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  { requestMoreArticleList }
)(List)
