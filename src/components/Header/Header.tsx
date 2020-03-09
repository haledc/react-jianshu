import React, { useRef, RefObject } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

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
import { RootState } from '../../store'
import {
  SEARCH_FOCUS,
  SEARCH_BLUR,
  MOUSE_ENTER,
  MOUSE_LEAVE,
  CHANGE_PAGE
} from './store'
import { CHANGE_LOGIN_STATUS } from '../../containers/Login/store/types'

const Header: React.FC = () => {
  const focused = useSelector((state: RootState) => state.header.focused)
  const mouseIn = useSelector((state: RootState) => state.header.mouseIn)
  const list = useSelector((state: RootState) => state.header.list)
  const page = useSelector((state: RootState) => state.header.page)
  const totalPage = useSelector((state: RootState) => state.header.totalPage)
  const isLogin = useSelector((state: RootState) => state.login.isLogin)

  const dispatch = useDispatch()

  const spinRef = useRef<HTMLElement>(null)
  const newList = list
  const pageList = []

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
    ref: RefObject<HTMLElement>
  ) => {
    let originAngle: string =
      ref.current?.style?.transform.replace(/[^0-9]/gi, '') || '0'

    ref.current!.style.transform = `rotate(${parseInt(originAngle, 10) +
      360}deg)`
    if (page < totalPage) {
      dispatch({ type: CHANGE_PAGE, payload: { page: page + 1 } })
    } else {
      dispatch({ type: CHANGE_PAGE, payload: { page: 1 } })
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
            <NavItem
              className="right"
              onClick={() =>
                dispatch({
                  type: CHANGE_LOGIN_STATUS,
                  payload: { isLogin: false }
                })
              }
            >
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
                onFocus={() => dispatch({ type: SEARCH_FOCUS })}
                onBlur={() => dispatch({ type: SEARCH_BLUR })}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
              &#xe62e;
            </i>
            {(focused || mouseIn) && (
              <SearchInfo
                onMouseEnter={() => dispatch({ type: MOUSE_ENTER })}
                onMouseLeave={() => dispatch({ type: MOUSE_LEAVE })}
              >
                <SearchInfoTitle>
                  热门搜索
                  <SearchInfoSwitch
                    onClick={() => handleChangePage(page, totalPage, spinRef!)}
                  >
                    <i ref={spinRef} className="iconfont spin">
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
}

export default Header
