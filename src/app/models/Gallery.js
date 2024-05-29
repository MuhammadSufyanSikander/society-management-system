import mongoose from 'mongoose'

const GallerySchema = new mongoose.Schema({
  image: { type: String, required: true },
})

export default mongoose.models.Gallery || mongoose.model('Gallery', GallerySchema)
