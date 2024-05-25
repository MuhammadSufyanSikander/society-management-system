import z from 'zod'

const societyAddSchema = z.object({
  societyName: z.string().min(1, 'Name is required'),
  societyDescription: z.string().min(1, 'Description is required'),
  department: z.string().min(1, 'Department is required'),
  mission: z.string().min(1, 'Mission is required'),
  achievements: z.string().min(1, 'Achievements is required'),
  rules: z.string().min(1, 'Rules is required'),
})

export default societyAddSchema
