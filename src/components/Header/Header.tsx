import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import { getList } from '../../request'

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  Addition,
  Button
} from './StyleComponents'
import { CSSTransition } from 'react-transition-group'
import { useStore } from '../../hooks'

const Header = observer(() => {
  const { headerStore, loginStore } = useStore()
  const {
    focused,
    mouseIn,
    list,
    page,
    totalPage,
    setPage,
    setFocused,
    setMouseIn,
    setList,
    setTotalPage
  } = headerStore

  const { isLogin, setLoginStatus } = loginStore
  let spinIcon: HTMLElement
  const newList = list.slice()
  const pageList = []

  useEffect(() => {
    const fetchData = async () => {
      const list = await getList()
      setList(list)
      setTotalPage(Math.ceil(list.length / 10))
    }
    fetchData()
  }, [setList, setTotalPage])

  if (newList?.length) {
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      if (newList[i] !== undefined) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
  }

  const handleChangePage = (
    page: number,
    totalPage: number,
    iconRef: HTMLElement
  ) => {
    let originAngle: string =
      iconRef?.style?.transform?.replace(/[^0-9]/gi, '') || '0'

    iconRef.style.transform = `rotate(${parseInt(originAngle, 10) + 360}deg)`

    if (page < totalPage) {
      setPage(page + 1)
    } else {
      setPage(1)
    }
  }

  return (
    <div>
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <Link to="/">
            <NavItem className="left active">首页</NavItem>
          </Link>
          <NavItem className="left">下载App</NavItem>
          {isLogin ? (
            <NavItem className="right" onClick={() => setLoginStatus(false)}>
              退出
            </NavItem>
          ) : (
            <Link to="/login">
              <NavItem className="right">登录</NavItem>
            </Link>
          )}
          <NavItem className="right">
            <i className="iconfont">&#xe65a;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={500} classNames="slide">
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
              &#xe62e;
            </i>
            {(focused || mouseIn) && (
              <SearchInfo
                onMouseEnter={() => setMouseIn(true)}
                onMouseLeave={() => setMouseIn(false)}
              >
                <SearchInfoTitle>
                  热门搜索
                  <SearchInfoSwitch
                    onClick={() => handleChangePage(page, totalPage, spinIcon)}
                  >
                    <i ref={el => (spinIcon = el!)} className="iconfont spin">
                      &#xe851;
                    </i>
                    换一批
                  </SearchInfoSwitch>
                </SearchInfoTitle>
                <div>{pageList}</div>
              </SearchInfo>
            )}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to="/write">
            <Button className="writing">
              <i className="iconfont">&#xe608;</i>
              写文章
            </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    </div>
  )
})

export default Header
