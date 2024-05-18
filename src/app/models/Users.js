import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  dateofbirth: { type: String },
  gender: { type: String },
  cnic: { type: String, required: true },
  registration: { type: String },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  department: { type: String },
  program: { type: String },
  section: { type: String },
  society: { type: String },
  password: { type: String, required: true },
  role: { type: String, required: true },
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
