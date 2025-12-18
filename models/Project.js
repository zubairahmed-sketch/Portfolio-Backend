import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, default: '' },
  technologies: { type: [String], default: [] },
  liveLink: { type: String, default: '#' },
  codeLink: { type: String, default: '#' },
}, { timestamps: true })

export default mongoose.models.Project || mongoose.model('Project', projectSchema)
