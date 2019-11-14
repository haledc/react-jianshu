import React from 'react'
import { connect } from 'react-redux'
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
import {
  searchFocus,
  searchBlur,
  mouseEnter,
  mouseLeave,
  changePage
} from './store/actions'
import { RootState } from '../../store'
// @ts-ignore
import { changeLoginStatus } from '../../containers/Login/store/actions'

const mapStateToProps = (state: RootState) => ({
  focused: state.header.focused,
  mouseIn: state.header.mouseIn,
  list: state.header.list,
  page: state.header.page,
  totalPage: state.header.totalPage,
  isLogin: state.login.isLogin
})

interface HeaderProps {
  focused: boolean
  mouseIn: boolean
  list: string[]
  page: number
  isLogin: boolean
  totalPage: number
  searchFocus: typeof searchFocus
  searchBlur: typeof searchBlur
  mouseEnter: typeof mouseEnter
  mouseLeave: typeof mouseLeave
  changePage: typeof changePage
  changeLoginStatus: typeof changeLoginStatus
}

const Header: React.FC<HeaderProps> = ({
  focused,
  mouseIn,
  list,
  page,
  isLogin,
  totalPage,
  searchFocus,
  searchBlur,
  mouseEnter,
  mouseLeave,
  changePage,
  changeLoginStatus
}) => {
  let spinIcon: HTMLElement
  const newList = list
  const pageList = []

  if (newList && newList.length) {
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
    iconDom: HTMLElement
  ) => {
    let originAngle: string =
      iconDom.style.transform && iconDom.style.transform.replace(/[^0-9]/gi, '')
    originAngle = originAngle || '0'

    iconDom.style.transform = `rotate(${parseInt(originAngle, 10) + 360}deg)`
    if (page < totalPage) {
      changePage(page + 1)
    } else {
      changePage(1)
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
            <NavItem className="right" onClick={() => changeLoginStatus(false)}>
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
                onFocus={() => searchFocus()}
                onBlur={() => searchBlur()}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
              &#xe62e;
            </i>
            {(focused || mouseIn) && (
              <SearchInfo
                onMouseEnter={() => mouseEnter()}
                onMouseLeave={() => mouseLeave()}
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
}

export default connect(mapStateToProps, {
  searchFocus,
  searchBlur,
  mouseEnter,
  mouseLeave,
  changePage,
  changeLoginStatus
})(Header)
