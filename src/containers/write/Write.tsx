import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { RootState } from '../../store'

const mapStateToProps = (state: RootState) => ({
  isLogin: state.login.isLogin
})

interface WriteProps {
  isLogin: boolean
}

const Write: React.FC<WriteProps> = ({ isLogin }) => {
  return <>{isLogin ? <div>写文章页面</div> : <Redirect to="/login" />}</>
}

Write.prototype = {
  isLogin: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(Write)
