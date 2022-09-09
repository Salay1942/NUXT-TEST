import axios from 'axios'

export default () => {
  const http = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'http://178.128.83.133' : 'http://localhost:3000',
    headers: useRequestHeaders(['cookie'])
  })
  return http
}