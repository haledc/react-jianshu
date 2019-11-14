import {
  CHANGE_LIST,
  SEARCH_FOCUS,
  SEARCH_BLUR,
  MOUSE_ENTER,
  MOUSE_LEAVE,
  CHANGE_PAGE,
  ChangeListAction,
  SearchFocusAction,
  SearchBlurAction,
  MouseEnterAction,
  MouseLeaveAction,
  changePageAction
} from './types'

export const changeList = (list: string[]): ChangeListAction => ({
  type: CHANGE_LIST,
  payload: {
    list,
    totalPage: Math.ceil(list.length / 10)
  }
})

export const searchFocus = (): SearchFocusAction => ({
  type: SEARCH_FOCUS
})

export const searchBlur = (): SearchBlurAction => ({
  type: SEARCH_BLUR
})

export const mouseEnter = (): MouseEnterAction => ({
  type: MOUSE_ENTER
})

export const mouseLeave = (): MouseLeaveAction => ({
  type: MOUSE_LEAVE
})

export const changePage = (page: number): changePageAction => ({
  type: CHANGE_PAGE,
  payload: { page }
})
