import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  // baseURL: 'https://transmeet.herokuapp.com',
})

export default api
