import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import store from './store'
import Header from './common/header'
import Home from './views/Home'
import Detail from './views/Detail/loadable'
import Login from './views/Login'
import Write from './views/Write'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/write" component={Write} />
          <Route exact path="/detail/:id" component={Detail} />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
