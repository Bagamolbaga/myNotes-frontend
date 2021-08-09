/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import axios from 'axios'

const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL_URL}`,
})

const interceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('my-notes-token')}`
  return config
}

API.interceptors.request.use(interceptor)

API.UploadPhoto = async (file) => {
  const formData = new FormData()
  formData.append('key', '6d207e02198a847aa98d0a2a901485a5')
  formData.append('action', 'upload')
  formData.append('source', file)
  formData.append('format', 'json')

  return axios.post('https://freeimage.host/api/1/upload', {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Content-Type': 'multipart/form-data',
    },
  }, formData)
}

export { API }
