export interface HeaderState {
  focused: boolean
  mouseIn: boolean
  list: string[]
  page: number
  totalPage: number
}

export const SEARCH_FOCUS = 'header/SEARCH_FOCUS'
export const SEARCH_BLUR = 'header/SEARCH_BLUR'
export const CHANGE_LIST = 'header/CHANGE_LIST'
export const MOUSE_ENTER = 'header/MOUSE_ENTER'
export const MOUSE_LEAVE = 'header/MOUSE_LEAVE'
export const CHANGE_PAGE = 'header/CHANGE_PAGE'

export interface ChangeListAction {
  type: typeof CHANGE_LIST
  payload: {
    list: string[]
    totalPage: number
  }
}

export interface SearchFocusAction {
  type: typeof SEARCH_FOCUS
}
export interface SearchBlurAction {
  type: typeof SEARCH_BLUR
}
export interface MouseEnterAction {
  type: typeof MOUSE_ENTER
}
export interface MouseLeaveAction {
  type: typeof MOUSE_LEAVE
}
export interface changePageAction {
  type: typeof CHANGE_PAGE
  payload: {
    page: number
  }
}

export type HeaderActionTypes =
  | ChangeListAction
  | SearchFocusAction
  | SearchBlurAction
  | MouseEnterAction
  | MouseLeaveAction
  | changePageAction
