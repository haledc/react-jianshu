import { fromJS } from 'immutable'
import * as types from './types'
import axios from 'axios'

const changeList = data => ({
  type: types.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
  type: types.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: types.SEARCH_BLUR
})

export const mouseEnter = () => ({
  type: types.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: types.MOUSE_LEAVE
})

export const changePage = page => ({
  type: types.CHANGE_PAGE,
  page
})

export const getList = () => dispatch => {
  axios
    .get('/api/headerList.json')
    .then(res => {
      if (res.data.success === true) {
        dispatch(changeList(res.data.data))
      }
    })
    .catch(e => console.log(e))
}
