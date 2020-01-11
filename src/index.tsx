import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import GlobalStyle from './GlobalStyle'
import { FontStyle } from './assets/static/iconfont/iconfont'

const app = (
  <>
    <App />
    <GlobalStyle />
    <FontStyle />
  </>
)

ReactDOM.render(app, document.getElementById('root'))
