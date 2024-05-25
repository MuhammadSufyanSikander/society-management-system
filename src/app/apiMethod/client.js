import axios from 'axios'

const production = 'https://society-management-system-app.vercel.app/api'
const local = 'http://localhost:3000/api'

const isProduction = false

export const API_URL = isProduction ? production : local

export default axios.create({
  baseURL: API_URL,
})
