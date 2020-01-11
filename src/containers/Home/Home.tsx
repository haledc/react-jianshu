import React, { useEffect } from 'react'
import { observer } from 'mobx-react'

import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { HomeWrapper, HomeLeft, HomeRight, BackUp } from './StyleComponents'
import { getHomeInfo } from '../../request'
import { useStore } from '../../hooks'

const Home = observer(() => {
  const { homeStore } = useStore()
  const { isShowScroll, setScrollShow, setHomeInfo } = homeStore

  useEffect(() => {
    window.addEventListener('scroll', changeScrollShow)
    return () => {
      window.removeEventListener('scroll', changeScrollShow)
    }
  })

  const fetchData = async () => {
    const info = await getHomeInfo()
    setHomeInfo(info)
  }

  useEffect(() => {
    fetchData()
  })

  const changeScrollShow = () => {
    if (document.documentElement.scrollTop > 300) {
      setScrollShow(true)
    } else {
      setScrollShow(false)
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
})

export default Home
