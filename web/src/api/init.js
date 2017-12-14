import axios from 'axios'
import { rememberToken, getValidToken } from './token'

console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL)

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
  // baseURL: 'http://localhost:7100'
})

export function setToken(token) {
  rememberToken(token)

  if (token) {
    // Set the Authorization header for all requests in the future
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
  else {
    delete api.defaults.headers.common['Authorization']
  }
}

// Validates the token, and if it’s invalid, remove from local storage
setToken(getValidToken())

export default api
