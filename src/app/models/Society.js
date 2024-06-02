import mongoose from 'mongoose'

const SocietySchema = new mongoose.Schema(
  {
    societyName: { type: String, required: true },
    societyDescription: { type: String, required: true },
    department: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Department' }, // must be id of department, use ref
    mission: { type: String, required: true },
    achievements: { type: String, required: true },
    rules: { type: String, required: true },
    admin: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    image: { type: String },
    groupMemberImage: { type: String },
    galleryImages: [{ type: String }],
    headInformation: { type: String },
  },
  {
    timestamps: true,
  },
)

export default mongoose.models.Society || mongoose.model('Society', SocietySchema)
