import axios from 'axios'

const baseURL = import.meta.env.VITE_APP_BASE_URL
const bazarRequest = axios.create({
  baseURL
})

export default bazarRequest
