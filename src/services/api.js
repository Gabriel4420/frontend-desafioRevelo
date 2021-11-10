import axios from 'axios'

const api = axios.create({
  baseURL: 'https://desafiorevelo-backend.herokuapp.com/',
})

export default api
