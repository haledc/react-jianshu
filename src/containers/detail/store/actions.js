export const REQUEST_DETAIL = 'detail/REQUEST_DETAIL'
export const RECEIVE_DETAIL = 'detail/RECEIVE_DETAIL'

export const requestDetail = id => ({
  type: REQUEST_DETAIL,
  id
})

export const receiveDetail = data => ({
  type: RECEIVE_DETAIL,
  data
})
