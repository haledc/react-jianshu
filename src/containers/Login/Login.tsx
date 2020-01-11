import React, { createRef, useState } from 'react'
import { observer } from 'mobx-react'
import { Redirect } from 'react-router-dom'
import { LoginWrapper, LoginBox, Input, Button } from './StyleComponents'
import { login } from '../../request'
import { useStore } from '../../hooks'

const Login = observer(() => {
  const { loginStore } = useStore()
  const { isLogin, setLoginStatus } = loginStore

  const usernameInput = createRef<HTMLInputElement>()
  const passwordInput = createRef<HTMLInputElement>()

  const [username, setUsername] = useState<string>('Hale')
  const [password, setPassword] = useState<string>('123456')

  const onLogin = async () => {
    await login({ username, password })
    setLoginStatus(true)
  }

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
            <Button onClick={onLogin}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )}
    </>
  )
})

export default Login
