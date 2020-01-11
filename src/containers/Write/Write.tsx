import React from 'react'
import { observer } from 'mobx-react'
import { Redirect } from 'react-router-dom'
import { useStore } from '../../hooks'

const Write = observer(() => {
  const { loginStore } = useStore()
  const { isLogin } = loginStore

  return <>{isLogin ? <div>写文章页面</div> : <Redirect to="/login" />}</>
})

export default Write
