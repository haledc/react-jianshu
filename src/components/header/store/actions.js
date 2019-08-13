import { fromJS } from 'immutable'

export const SEARCH_FOCUS = 'header/SEARCH_FOCUS'
export const SEARCH_BLUR = 'header/SEARCH_BLUR'
export const CHANGE_LIST = 'header/CHANGE_LIST'
export const MOUSE_ENTER = 'header/MOUSE_ENTER'
export const MOUSE_LEAVE = 'header/MOUSE_LEAVE'
export const CHANGE_PAGE = 'header/CHANGE_PAGE'

export const changeList = data => ({
  type: CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
  type: SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: SEARCH_BLUR
})

export const mouseEnter = () => ({
  type: MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: MOUSE_LEAVE
})

export const changePage = page => ({
  type: CHANGE_PAGE,
  page
})
