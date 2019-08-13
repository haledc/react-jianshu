import { combineReducers } from 'redux-immutable'

import { reducer as headerReducer } from '../components/header/store'
import { reducer as homeReducer } from '../containers/home/store'
import { reducer as detailReducer } from '../containers/detail/store'
import { reducer as loginReducer } from '../containers/login/store'

const reducers = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
})

export default reducers
