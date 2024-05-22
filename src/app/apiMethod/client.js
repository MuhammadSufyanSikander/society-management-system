import axios from 'axios'

const production = 'https://society-management-system-app.vercel.app/api'
const local = 'http://localhost:3000'

export default axios.create({
  baseURL: production,
})
