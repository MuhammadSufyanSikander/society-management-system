import client from './client'

export const society = () => {
  return {
    getSocieties: async () => {
      try {
        const response = await client.get('/api/societies')
        return response
      } catch (error) {
        console.log('error', error)
        throw error
      }
    },
  }
}
