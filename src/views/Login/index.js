import React, { createRef } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { LoginWrapper, LoginBox, Input, Button } from './style'
import { actionCreators } from '../../store/reducers/login'

const mapState = state => ({
  isLogin: state.getIn(['login', 'isLogin'])
})

const mapDispatch = dispatch => ({
  login(username, password) {
    dispatch(actionCreators.login(username, password))
  }
})

const Login = props => {
  const { isLogin } = props
  const username = createRef()
  const password = createRef()
  return (
    <>
      {isLogin ? (
        <Redirect to="/" />
      ) : (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账户" ref={username} />
            <Input placeholder="密码" ref={password} type="password" />
            <Button onClick={() => props.login(username.value, password.value)}>
              登录
            </Button>
          </LoginBox>
        </LoginWrapper>
      )}
    </>
  )
}

export default connect(
  mapState,
  mapDispatch
)(Login)
