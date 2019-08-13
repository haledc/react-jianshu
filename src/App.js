import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import store from './store'
import Header from './components/header'
import Home from './containers/home'
import Detail from './containers/detail/loadable'
import Login from './containers/login'
import Write from './containers/write'

const App = () => (
  <Provider store={store()}>
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

export default App
