import React, { createRef } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { LoginWrapper, LoginBox, Input, Button } from './style'
import { actions } from './store'

const mapStateToProps = state => ({
  isLogin: state.getIn(['login', 'isLogin'])
})

const mapDispatchToProps = dispatch => ({
  login(username, password) {
    dispatch(actions.login(username, password))
  }
})

const Login = ({ isLogin, login }) => {
  const username = createRef()
  const password = createRef()
  return (
    <>
      {isLogin ? (
        <Redirect to="/" />
      ) : (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账户" ref={username} value="hale" />
            <Input placeholder="密码" ref={password} type="password" value="123456" />
            <Button onClick={() => login(username.value, password.value)}>
              登录
            </Button>
          </LoginBox>
        </LoginWrapper>
      )}
    </>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
