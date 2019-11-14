import React, { createRef, useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { LoginWrapper, LoginBox, Input, Button } from './StyleComponents'
import { requestLogin } from './store/actions'
import { RootState } from '../../store'

const mapStateToProps = (state: RootState) => ({
  isLogin: state.login.isLogin
})

interface LoginProps {
  isLogin: boolean
  requestLogin: typeof requestLogin
}

const Login: React.FC<LoginProps> = ({ isLogin, requestLogin }) => {
  const usernameInput = createRef<HTMLInputElement>()
  const passwordInput = createRef<HTMLInputElement>()

  const [username, setUsername] = useState<string>('Hale')
  const [password, setPassword] = useState<string>('123456')

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
                  username: usernameInput.current!.value,
                  password: passwordInput.current!.value
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

export default connect(
  mapStateToProps,
  { requestLogin }
)(Login)
