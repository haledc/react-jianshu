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
  constructor(props) {
    super()
    this.state = {
      username: 'Hale',
      password: '123456'
    }
  }

  render() {
    const { isLogin } = this.props
    return (
      <Fragment>
        {isLogin ? (
          <Redirect to="/" />
        ) : (
          <LoginWrapper>
            <LoginBox>
              <Input
                placeholder="账户"
                value={this.state.username}
                ref={input => (this.username = input)}
                onChange={event =>
                  this.setState({ username: event.target.value })
                }
              />
              <Input
                placeholder="密码"
                value={this.state.password}
                ref={input => (this.password = input)}
                type="password"
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
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
