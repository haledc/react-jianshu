import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import { toggleScrollShow } from './store/actions'
import { BackUp } from './style'

const mapStateToProps = state => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const Home = ({ showScroll, toggleScrollShow }) => {
  useEffect(() => {
    bindScrollEvent()
    return () => {
      window.removeEventListener('scroll', changeScrollShow)
    }
  })

  const changeScrollShow = () => {
    if (document.documentElement.scrollTop > 300) {
      toggleScrollShow(true)
    } else {
      toggleScrollShow(false)
    }
  }

  const handleScrollTop = () => {
    window.scrollTo(0, 0)
  }

  const bindScrollEvent = () => {
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

Home.prototype = {
  showScroll: PropTypes.bool.isRequired,
  toggleScrollShow: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  { toggleScrollShow }
)(Home)
