import React, { createRef, useState } from 'react'
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
  const usernameInput = createRef()
  const passwordInput = createRef()

  const [username, setUsername] = useState('Hale')
  const [password, setPassword] = useState('123456')

  return (
    <>
      {isLogin ? (
        <Redirect to="/" />
      ) : (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="账户"
              ref={usernameInput}
              value={username}
              onChange={event => setUsername(event.target.value)}
            />
            <Input
              placeholder="密码"
              ref={passwordInput}
              type="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
            <Button
              onClick={() =>
                login(usernameInput.current.value, passwordInput.current.value)
              }
            >
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
