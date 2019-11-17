import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { HomeWrapper, HomeLeft, HomeRight, BackUp } from './StyleComponents'
import { RootState } from '../../store'
import { TOGGLE_SCROLL_SHOW } from './store'

const Home: React.FC = () => {
  const isShowScroll = useSelector(
    (state: RootState) => state.home.isShowScroll
  )
  const dispatch = useDispatch()

  useEffect(() => {
    window.addEventListener('scroll', changeScrollShow)
    return () => {
      window.removeEventListener('scroll', changeScrollShow)
    }
  })

  const changeScrollShow = () => {
    if (document.documentElement.scrollTop > 300) {
      dispatch({ type: TOGGLE_SCROLL_SHOW, payload: { isShowScroll: true } })
    } else {
      dispatch({ type: TOGGLE_SCROLL_SHOW, payload: { isShowScroll: false } })
    }
  }

  const handleScrollTop = () => {
    window.scrollTo(0, 0)
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
      {isShowScroll && <BackUp onClick={handleScrollTop}>回到顶部</BackUp>}
    </HomeWrapper>
  )
}

export default Home
