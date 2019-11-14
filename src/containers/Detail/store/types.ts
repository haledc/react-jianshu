export interface DetailState {
  id: number
  title: string
  content: string
}

export const REQUEST_DETAIL = 'detail/REQUEST_DETAIL'
export const RECEIVE_DETAIL = 'detail/RECEIVE_DETAIL'

export interface RequestDetailAction {
  type: typeof REQUEST_DETAIL
  payload: {
    id: number
  }
}

export interface ReceiveDetailAction {
  type: typeof RECEIVE_DETAIL
  payload: {
    title: string
    content: string
  }
}

export type DetailActionTypes = RequestDetailAction | ReceiveDetailAction
