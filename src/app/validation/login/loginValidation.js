import z from 'zod'

const loginSchema = z.object({
  email: z.string().email('Invalid Email Address').min(1, 'Email Address is required'),
  password: z.string().min(8, 'Password must be min 8 characters').max(12, 'Password must be min 12 characters'),
})

export default loginSchema
