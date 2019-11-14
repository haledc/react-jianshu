import {
  SEARCH_FOCUS,
  SEARCH_BLUR,
  CHANGE_LIST,
  MOUSE_ENTER,
  MOUSE_LEAVE,
  CHANGE_PAGE,
  HeaderState,
  HeaderActionTypes
} from './types'

const InitialState: HeaderState = {
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
}

export default (state = InitialState, action: HeaderActionTypes) => {
  switch (action.type) {
    case SEARCH_FOCUS:
      return { ...state, focused: true }
    case SEARCH_BLUR:
      return { ...state, focused: false }
    case CHANGE_LIST:
      const { list, totalPage } = action.payload
      return { ...state, list, totalPage }
    case MOUSE_ENTER:
      return { ...state, mouseIn: true }
    case MOUSE_LEAVE:
      return { ...state, mouseIn: false }
    case CHANGE_PAGE:
      const { page } = action.payload
      return { ...state, page }
    default:
      return state
  }
}
