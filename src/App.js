import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import store from './store'
import Header from './components/header'
import Home from './views/home'
import Detail from './views/detail/loadable'
import Login from './views/login'
import Write from './views/write'

class App extends Component {
  render() {
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
}

export default App
