import React, { Component, Fragment } from 'react'
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

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class Login extends Component {
  render() {
    const { isLogin } = this.props
    console.log(isLogin)
    return (
      <Fragment>
        {isLogin ? (
          <Redirect to="/" />
        ) : (
          <LoginWrapper>
            <LoginBox>
              <Input
                placeholder="账户"
                value="hale"
                ref={input => (this.username = input)}
              />
              <Input
                placeholder="密码"
                value="123456"
                ref={input => (this.password = input)}
                type="password"
              />
              <Button
                onClick={() =>
                  this.props.login(this.username.value, this.password.value)
                }
              >
                登录
              </Button>
            </LoginBox>
          </LoginWrapper>
        )}
      </Fragment>
    )
  }
}

export default Login
