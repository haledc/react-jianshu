import { fromJS } from 'immutable'
import axios from 'axios'

import * as types from '../actionTypes'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SEARCH_FOCUS:
      return state.set('focused', true)
    case types.SEARCH_BLUR:
      return state.set('focused', false)
    case types.CHANGE_LIST:
      // return state.set('list', action.data).set('totalPage', action.totalPage)
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case types.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case types.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case types.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}

export const actionCreator = {
  searchFocus() {
    return {
      type: types.SEARCH_FOCUS
    }
  },

  searchBlur() {
    return {
      type: types.SEARCH_BLUR
    }
  },

  changeList(data) {
    return {
      type: types.CHANGE_LIST,
      data: fromJS(data),
      totalPage: Math.ceil(data.length / 10)
    }
  },

  mouseEnter() {
    return {
      type: types.MOUSE_ENTER
    }
  },

  mouseLeave() {
    return {
      type: types.MOUSE_LEAVE
    }
  },

  changePage(page) {
    return {
      type: types.CHANGE_PAGE,
      page
    }
  },

  getList() {
    return dispatch => {
      axios
        .get('/api/headerList.json')
        .then(res => {
          if (res.data.success === true) {
            dispatch(this.changeList(res.data.data))
          }
        })
        .catch(e => console.log(e))
    }
  }
}
