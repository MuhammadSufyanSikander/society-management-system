import z from 'zod'

const step2Schema = z.object({
  department: z.string().min(1, 'Department is required'),
  program: z.string().min(1, 'Program is required'),
  section: z.string().min(1, 'Section is required'),
  society: z.string().min(1, 'Society is required'),
})

export default step2Schema
