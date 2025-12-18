import mongoose from 'mongoose'

const skillSchema = new mongoose.Schema({
  category: { type: String, required: true, enum: ['Frontend', 'Backend', 'Databases', 'AI & ML', 'Languages', 'Other'] },
  skills: { type: [String], required: true, default: [] },
}, { timestamps: true })

export default mongoose.models.Skill || mongoose.model('Skill', skillSchema)
