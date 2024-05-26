import client from './client'

export const email = () => {
  return {
    sendEmail: async ({ from, recipients = [], subject, text }) => {
      try {
        const response = await client.post('/send_email', { from, recipients, subject, text })
        return response
      } catch (error) {
        throw error
      }
    },
  }
}
