import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const mapStateToProps = state => ({
  isLogin: state.getIn(['login', 'isLogin'])
})

const Write = ({ isLogin }) => {
  return <>{isLogin ? <div>写文章页面</div> : <Redirect to="/login" />}</>
}

export default connect(mapStateToProps)(Write)
