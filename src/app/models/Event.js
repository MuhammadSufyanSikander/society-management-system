import mongoose from 'mongoose'

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  society: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Society' },
  image: { type: String, required: true },
})

export default mongoose.models.Event || mongoose.model('Event', EventSchema)
