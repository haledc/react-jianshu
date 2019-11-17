import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { RootState } from '../../store'

const Write: React.FC = () => {
  const isLogin = useSelector((state: RootState) => state.login.isLogin)

  return <>{isLogin ? <div>写文章页面</div> : <Redirect to="/login" />}</>
}

export default Write
