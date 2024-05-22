import client from './client'

export const department = () => {
  return {
    getDepartments: async () => {
      try {
        const response = await client.get('/api/departments')
        return response
      } catch (error) {
        console.log('error', error)
        throw error
      }
    },
  }
}
