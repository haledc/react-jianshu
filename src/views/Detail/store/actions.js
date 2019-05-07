import axios from 'axios'
import * as types from './types'

export const getDetail = id => {
  return dispatch => {
    axios
      .get(`/api/detail.json?id=${id}`)
      .then(res => {
        if (res.data.success) {
          dispatch(changeDetailInfo(res.data.data))
        }
      })
      .catch(e => console.log(e))
  }
}

const changeDetailInfo = data => {
  return {
    type: types.CHANGE_DETAIL_INFO,
    title: data.title,
    content: data.content
  }
}
