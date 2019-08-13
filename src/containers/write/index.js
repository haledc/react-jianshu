import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const mapStateToProps = state => ({
  isLogin: state.getIn(['login', 'isLogin'])
})

@connect(mapStateToProps)
class Write extends Component {
  render() {
    const { isLogin } = this.props
    return (
      <Fragment>
        {isLogin ? <div>写文章页面</div> : <Redirect to="/login" />}
      </Fragment>
    )
  }
}

export default Write
