import React, { createRef, useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import { LoginWrapper, LoginBox, Input, Button } from './style'
import { requestLogin } from './store/actions'

const mapStateToProps = state => ({
  isLogin: state.getIn(['login', 'isLogin'])
})

const Login = ({ isLogin, requestLogin }) => {
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
                requestLogin({
                  username: usernameInput.current.value,
                  password: passwordInput.current.value
                })
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

Login.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  requestLogin: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  { requestLogin }
)(Login)
