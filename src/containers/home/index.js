import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import { actions } from './store'
import { BackUp } from './style'

const mapStateToProps = state => ({
  showScroll: state.getIn(['home', 'showScroll']),
  articleList: state.getIn(['home', 'articleList'])
})

const mapDispatchToProps = dispatch => {
  return {
    getHomeInfo() {
      return dispatch(actions.getHomeInfo())
    },
    changeScrollShow() {
      if (document.documentElement.scrollTop > 300) {
        dispatch(actions.toggleScrollShow(true))
      } else {
        dispatch(actions.toggleScrollShow(false))
      }
    }
  }
}

const Home = ({ showScroll, articleList, getHomeInfo, changeScrollShow }) => {
  useEffect(() => {
    getHomeInfo()
  }, [articleList.length])

  useEffect(() => {
    bindScrollEvent()
    return () => {
      window.removeEventListener('scroll', changeScrollShow)
    }
  })

  function handleScrollTop() {
    window.scrollTo(0, 0)
  }

  function bindScrollEvent() {
    window.addEventListener('scroll', changeScrollShow)
  }

  return (
    <HomeWrapper>
      <HomeLeft>
        <img
          className="banner-img"
          src="http://upload.jianshu.io/admin_banners/web_images/4502/25b524b6d1d21c508b7ca6a6a0a77ead48eed1b6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          alt="banner"
        />
        <Topic />
        <List />
      </HomeLeft>
      <HomeRight>
        <Recommend />
        <Writer />
      </HomeRight>
      {showScroll && <BackUp onClick={handleScrollTop}>回到顶部</BackUp>}
    </HomeWrapper>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
