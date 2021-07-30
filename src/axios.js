/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import axios from 'axios'

const API = axios.create({
  baseURL: process.env.VERCEL_ENV === 'production' ? 'https://baga-my-notes-server-v2.herokuapp.com' : process.env.REACT_APP_API_URL_URL,
})

const interceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('my-notes-token')}`
  return config
}

API.interceptors.request.use(interceptor)

export { API }
