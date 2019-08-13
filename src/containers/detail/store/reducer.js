import { fromJS } from 'immutable'
import { REQUEST_DETAIL, RECEIVE_DETAIL } from './actions'

const defaultState = fromJS({
  id: 0,
  title: '',
  content: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_DETAIL:
      return state.set('id', action.id)
    case RECEIVE_DETAIL:
      return state.merge({
        title: action.data.title,
        content: action.data.content
      })
    default:
      return state
  }
}
