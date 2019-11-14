import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import rootSaga from './sagas'
// @ts-ignore
import { HeaderState } from '../components/Header/store/types'
// @ts-ignore
import { LoginState } from '../containers/Login/store/types'
import { HomeState } from '../containers/Home/store/types'
import { DetailState } from '../containers/Detail/store/types'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)
export default () => store

export interface RootState {
  header: HeaderState
  login: LoginState
  home: HomeState
  detail: DetailState
}
