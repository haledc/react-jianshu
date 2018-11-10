import { combineReducers } from 'redux-immutable'

import header from './header'
import home from './home'
import detail from './detail'
import login from './login'

export default combineReducers({ header, home, detail, login })