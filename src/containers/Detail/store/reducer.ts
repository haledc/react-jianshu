import {
  REQUEST_DETAIL,
  RECEIVE_DETAIL,
  DetailState,
  DetailActionTypes
} from './types'

const defaultState: DetailState = {
  id: 0,
  title: '',
  content: ''
}

export default (state = defaultState, action: DetailActionTypes) => {
  switch (action.type) {
    case REQUEST_DETAIL:
      return { ...state, id: action.payload.id }
    case RECEIVE_DETAIL:
      const { title, content } = action.payload
      return { ...state, title, content }
    default:
      return state
  }
}
