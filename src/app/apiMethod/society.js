import client from './client'

export const society = () => {
  return {
    getSocieties: async () => {
      try {
        const response = await client.get(`/societies?timestamp=${Date.now()}`)
        return response
      } catch (error) {
        console.log('error', error)
        throw error
      }
    },
    addSociety: async data => {
      try {
        const response = await client.post(`/society`, data)
        return response
      } catch (error) {
        console.log('error', error)
        throw error
      }
    },
  }
}
