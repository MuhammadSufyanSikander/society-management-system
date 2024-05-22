import client from './client'

export const auth = () => {
  return {
    login: async (email, password) => {
      try {
        const response = await client.post('/api/login', { email, password })
        return response
      } catch (error) {
        throw error
      }
    },
    register: async data => {
      try {
        const response = await client.post('/api/register', data)
        return response
      } catch (error) {
        throw error
      }
    },
  }
}
