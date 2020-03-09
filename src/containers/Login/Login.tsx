import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { LoginWrapper, LoginBox, Input, Button } from './StyleComponents'
import { REQUEST_LOGIN } from './store'
import { RootState } from '../../store'

const Login: React.FC = () => {
  const isLogin = useSelector((state: RootState) => state.login.isLogin)
  const dispatch = useDispatch()

  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

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
              ref={usernameRef}
              value={username}
              onChange={event => setUsername(event.target.value)}
            />
            <Input
              placeholder="密码"
              ref={passwordRef}
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
                      username: usernameRef.current!.value,
                      password: passwordRef.current!.value
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
