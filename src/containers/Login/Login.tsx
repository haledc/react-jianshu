import React, { createRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { LoginWrapper, LoginBox, Input, Button } from './StyleComponents'
import { REQUEST_LOGIN } from './store'
import { RootState } from '../../store'

const Login: React.FC = () => {
  const isLogin = useSelector((state: RootState) => state.login.isLogin)
  const dispatch = useDispatch()

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
                dispatch({
                  type: REQUEST_LOGIN,
                  payload: {
                    user: {
                      username: usernameInput.current!.value,
                      password: passwordInput.current!.value
                    }
                  }
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

export default Login
