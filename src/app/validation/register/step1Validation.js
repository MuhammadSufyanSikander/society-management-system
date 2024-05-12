import z from 'zod'

const step1Schema = z.object({
  firstname: z.string().min(1, 'First Name is required'),
  lastname: z.string().min(1, 'Last Name is required'),
  dateOfBirth: z.string().min(1, 'Date of Birth is required'),
  gender: z.string().min(1, 'Gender is required'),
  cnic: z
    .string()
    .min(1, 'CNIC is required')
    .refine(value => /^[\d]{5}-[\d]{7}-[\d]{1}$/.test(value), 'Invalid CNIC, Expected format: 00000-00000000-0'),
  registration: z.string().refine(value => /^\d+$/.test(value), 'Registration must be a number'),
  mobile: z.string().refine(value => /^\d+$/.test(value), 'Mobile must be a number'),
  email: z.string().email('Invalid Email Address').min(1, 'Email Address is required'),
})

export default step1Schema
