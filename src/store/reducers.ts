import { combineReducers } from 'redux'

import { reducer as headerReducer } from '../components/Header/store'
import { reducer as homeReducer } from '../containers/Home/store'
import { reducer as detailReducer } from '../containers/Detail/store'
import { reducer as loginReducer } from '../containers/Login/store'

const reducers = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
})

export default reducers
