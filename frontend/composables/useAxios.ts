import axios from 'axios'

export default () => {
  const http = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'http://localhost' : 'http://localhost:3000',
    headers: useRequestHeaders(['cookie'])
  })
  return http
}