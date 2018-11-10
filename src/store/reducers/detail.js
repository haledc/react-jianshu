import { fromJS } from 'immutable'
import axios from 'axios'

import * as type from '../actionTypes'

const defaultState = fromJS({
  title: '',
  content: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case type.CHANGE_DETAIL_INFO:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state
  }
}

export const actionCreators = {

  changeDetailInfo(data) {
    return {
      type: type.CHANGE_DETAIL_INFO,
      title: data.title,
      content: data.content
    }
  },

  getDetail(id) {
    return dispatch => {
      axios.get(`/api/detail.json?id=${id}`)
        .then(res => {
          if (res.data.success) {
            dispatch(this.changeDetailInfo(res.data.data))
          }
        })
        .catch(e => console.log(e))
    }
  }
}