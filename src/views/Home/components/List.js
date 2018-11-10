import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { ListItem, ListInfo, LoadMore } from '../style'
import { actionCreators } from '../../../store/reducers/home'

const mapState = state => ({
  articleList: state.getIn(['home', 'articleList']),
  articlePage: state.getIn(['home', 'articlePage'])
})

const mapDispatch = dispatch => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})

@connect(mapState, mapDispatch)
class List extends PureComponent {


  render() {
    const { articleList, articlePage, getMoreList } = this.props

    return (
      <div>
        {
          articleList.map((item, index) => (
            <Link key={ index } to={ '/detail/' + item.get('id') }>
              <ListItem>
                <img className="pic" src={ item.get('imgUrl') } alt="pic" />
                <ListInfo>
                  <h3 className="title">{ item.get('title') }</h3>
                  <p className="desc">{ item.get('desc') }</p>
                </ListInfo>
              </ListItem>
            </Link>
          ))
        }
        <LoadMore onClick={ () => getMoreList(articlePage) }>阅读更多</LoadMore>
      </div>

    )
  }
}

export default List