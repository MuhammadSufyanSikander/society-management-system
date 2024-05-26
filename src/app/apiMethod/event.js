import client from './client'

export const event = () => {
  return {
    addEvent: async data => {
      try {
        const response = await client.post('/event', data)
        return response
      } catch (error) {
        throw error
      }
    },
    editEvent: async data => {
      try {
        const response = await client.put(`/event/${data.event_id}`, data)
        return response
      } catch (error) {
        throw error
      }
    },
    deleteEvent: async data => {
      try {
        const response = await client.delete(`/event/${data.event_id}`)
        return response
      } catch (error) {
        throw error
      }
    },
    fetchEvents: async (searchQuery = '') => {
      try {
        const response = await client.get(`/events?searchQuery=${searchQuery}`)
        return response
      } catch (error) {
        throw error
      }
    },
    fetchEvent: async data => {
      try {
        const response = await client.get(`/event/${data.event_id}`)
        return response
      } catch (error) {
        throw error
      }
    },
  }
}
