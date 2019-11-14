import axios from 'axios'

interface User {
  username: string
  password: string
}

const handleRequest = (request: Promise<any>) =>
  request
    .then(res => {
      if (res.data.success) {
        const response = res.data.data
        return { response }
      }
    })
    .catch(error => ({ error }))

export const getList = () => handleRequest(axios.get('/api/headerList.json'))

export const getDetail = (id: string) =>
  handleRequest(axios.get(`/api/detail.json?id=${id}`))

export const getHomeInfo = () => handleRequest(axios.get('/api/home.json'))

export const getMoreList = (page: number) =>
  handleRequest(axios.get(`/api/homeList.json?page=${page}`))

export const login = ({ username, password }: User) =>
  handleRequest(
    axios.get(`/api/login.json?username=${username}&password=${password}`)
  )
