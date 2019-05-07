import { fromJS } from 'immutable'
import * as types from './types'

const defaultState = fromJS({
  title: '',
  content: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_DETAIL_INFO:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state
  }
}
