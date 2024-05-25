import client from './client'

export const society = () => {
  return {
    getSocieties: async () => {
      try {
        const response = await fetch(`/societies`, { cache: 'no-cache' })

        return await response.json()
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
    editSociety: async data => {
      try {
        const response = await client.put(`/society/${data.society_id}`, data)
        return response
      } catch (error) {
        throw error
      }
    },
    deleteSociety: async data => {
      try {
        const response = await client.delete(`/society/${data.society_id}`)
        return response
      } catch (error) {
        throw error
      }
    },
  }
}
