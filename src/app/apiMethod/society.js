import client, { API_URL } from './client'

export const society = () => {
  return {
    getSocieties: async (searchQuery = '') => {
      try {
        const response = await fetch(`${API_URL}/societies?timestamp=${Date.now()}&searchQuery=${searchQuery}`, { cache: 'no-cache', next: { revalidate: 5 } })
        const data = await response.json()

        return { data }
      } catch (error) {
        throw error
      }
    },
    getSociety: async ({ society_id }) => {
      try {
        const response = await fetch(`${API_URL}/society/${society_id}?timestamp=${Date.now()}`, { cache: 'no-cache', next: { revalidate: 5 } })
        const data = await response.json()

        return { data }
      } catch (error) {
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
    assignAdminToSociety: async data => {
      try {
        const response = await client.put(`/assign_admin/${data.society_id}`, data)
        return response
      } catch (error) {
        throw error
      }
    },
  }
}
