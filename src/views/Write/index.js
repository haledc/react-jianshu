import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const mapState = state => ({
  isLogin: state.getIn(['login', 'isLogin'])
})

const Write = props => {
  const { isLogin } = props
  return <>{isLogin ? <div>写文章页面</div> : <Redirect to="/login" />}</>
}

export default connect(mapState)(Write)
