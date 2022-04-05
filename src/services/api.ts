import axios from 'axios'

const api = axios.create({
  baseURL: 'https://transmeet.herokuapp.com',
})

export default api
