import React, { Component } from 'react'
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
} from './style'
import { CSSTransition } from 'react-transition-group'
import { actionCreator } from '../../store/reducers/header'
import { actionCreators as loginActionCreators } from '../../store/reducers/login'

const mapState = state => ({
  // focused: state.get('header').get('focused')
  focused: state.getIn(['header', 'focused']),
  mouseIn: state.getIn(['header', 'mouseIn']),
  list: state.getIn(['header', 'list']),
  page: state.getIn(['header', 'page']),
  totalPage: state.getIn(['header', 'totalPage']),
  isLogin: state.getIn(['login', 'isLogin'])
})

const mapDispatch = dispatch => ({
  handleInputFocus(list) {
    list.size === 0 && dispatch(actionCreator.getList())
    dispatch(actionCreator.searchFocus())
  },
  handleInputBlur() {
    dispatch(actionCreator.searchBlur())
  },
  handleMouseEnter() {
    dispatch(actionCreator.mouseEnter())
  },
  handleMouseLeave() {
    dispatch(actionCreator.mouseLeave())
  },
  handleChangePage(page, totalPage, iconDom) {
    let originAngle = iconDom.style.transform.replace(/[^0-9]/ig, '')
    if (originAngle) {
      originAngle = parseInt(originAngle, 10)
    } else {
      originAngle = 0
    }
    console.log(originAngle)
    iconDom.style.transform = `rotate(${originAngle + 360}deg)`
    if (page < totalPage) {
      dispatch(actionCreator.changePage(page + 1))
    } else {
      dispatch(actionCreator.changePage(1))
    }
  },
  logout() {
    dispatch(loginActionCreators.changeLoginStatus(false))
  }
})

@connect(mapState, mapDispatch)
class Header extends Component {

  render() {
    const {focused, list, page, isLogin, totalPage, mouseIn, handleInputFocus, handleInputBlur, handleMouseEnter, handleMouseLeave, handleChangePage, logout} = this.props
    const newList = list.toJS()
    let pageList = []

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (newList[i] !== undefined) {
          pageList.push(
            <SearchInfoItem key={ newList[i] }>{ newList[i] }</SearchInfoItem>
          )
        }
      }
    }

    return (
      <div>
        <HeaderWrapper>
          <Link to="/">
            <Logo />
          </Link>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            {
              isLogin
                ? <NavItem className="right" onClick={ logout }>退出</NavItem>
                : <Link to="/login">
                  <NavItem className="right">登录</NavItem>
                </Link>
            }
            <NavItem className="right">
              <i className="iconfont">&#xe65a;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                in={ focused }
                timeout={ 500 }
                classNames="slide"
              >
                <NavSearch
                  className={ focused ? 'focused' : '' }
                  onFocus={ () => handleInputFocus(list) }
                  onBlur={ handleInputBlur }
                />
              </CSSTransition>
              <i className={ focused ? 'focused iconfont zoom' : 'iconfont zoom' }>&#xe62e;</i>
              { (focused || mouseIn)
              && <SearchInfo
                onMouseEnter={ handleMouseEnter }
                onMouseLeave={ handleMouseLeave }
              >
                <SearchInfoTitle>
                  热门搜索
                  <SearchInfoSwitch onClick={ () => handleChangePage(page, totalPage, this.spinIcon) }>
                    <i ref={ icon => this.spinIcon = icon } className="iconfont spin">&#xe851;</i>
                    换一批
                  </SearchInfoSwitch>
                </SearchInfoTitle>
                <div>
                  { pageList }
                </div>
              </SearchInfo>
              }
            </SearchWrapper>
          </Nav>
          <Addition>
            <Link to="/write">
              <Button className="writting">
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
}

export default Header
