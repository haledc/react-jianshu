import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import store from './store'
import Header from './components/Header'
import Home from './containers/Home'
import Detail from './containers/Detail'
import Login from './containers/Login'
import Write from './containers/Write'

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
