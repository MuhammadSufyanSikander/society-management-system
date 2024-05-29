import client from './client'

export const gallery = () => {
  return {
    fetchGallery: async () => {
      try {
        const response = await client.get('/gallery')
        return response
      } catch (error) {
        console.log('errorr :', error)
        throw error
      }
    },
    postGalleryImage: async data => {
      try {
        const response = await client.post('/gallery', data)
        return response
      } catch (error) {
        throw error
      }
    },
    removeGalleryImage: async data => {
      try {
        const response = await client.delete(`/gallery/${data.image_id}`)
        return response
      } catch (error) {
        throw error
      }
    },
  }
}
