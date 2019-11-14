import {
  RECEIVE_DETAIL,
  ReceiveDetailAction,
  REQUEST_DETAIL,
  RequestDetailAction
} from './types'

export const requestDetail = (id: number): RequestDetailAction => ({
  type: REQUEST_DETAIL,
  payload: {
    id
  }
})

interface DetailOptions {
  title: string
  content: string
}

export const receiveDetail = ({ title, content }: DetailOptions): ReceiveDetailAction => ({
  type: RECEIVE_DETAIL,
  payload: {
    title,
    content
  }
})
