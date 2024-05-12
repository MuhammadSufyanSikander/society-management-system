import z from 'zod'

const step3Schema = z.object({
  password: z.string().min(8, 'Password must be min 8 characters').max(12, 'Password must be min 12 characters'),
})

export default step3Schema
