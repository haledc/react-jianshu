import axios from 'axios'

const handleRequest = request =>
  request
    .then(res => {
      if (res.data.success) {
        const response = res.data.data
        return { response }
      }
    })
    .catch(error => ({ error }))

export const getList = () => handleRequest(axios.get('/api/headerList.json'))

export const getDetail = id =>
  handleRequest(axios.get(`/api/detail.json?id=${id}`))

export const getHomeInfo = () => handleRequest(axios.get('/api/home.json'))

export const getMoreList = page =>
  handleRequest(axios.get(`/api/homeList.json?page=${page}`))

export const login = ({ username, password }) =>
  handleRequest(
    axios.get(`/api/login.json?username=${username}&password=${password}`)
  )
