import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import { actionCreators } from '../../store/reducers/home'
import { BackUp } from './style'

const mapState = state => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = dispatch => {
  return {
    getHomeInfo() {
      return dispatch(actionCreators.getHomeInfo())
    },
    changeScrollShow() {
      if (document.documentElement.scrollTop > 300) {
        dispatch(actionCreators.toggleScrollShow(true))
      } else {
        dispatch(actionCreators.toggleScrollShow(false))
      }
    }
  }
}

@connect(
  mapState,
  mapDispatch
)
class Home extends PureComponent {
  componentDidMount() {
    this.props.getHomeInfo()
    this.bindScrollEvent()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollShow)
  }

  handleScrollTop() {
    window.scrollTo(0, 0)
  }

  bindScrollEvent() {
    window.addEventListener('scroll', this.props.changeScrollShow)
  }

  render() {
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
        {this.props.showScroll && (
          <BackUp onClick={this.handleScrollTop}>回到顶部</BackUp>
        )}
      </HomeWrapper>
    )
  }
}

export default Home
