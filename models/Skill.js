import mongoose from "mongoose"

const skillSchema = new mongoose.Schema({
  category: { type: String },
  skills: { type: Array },
  proficiency: { type: Number }
}, { timestamps: true })

export default mongoose.models.Skill || mongoose.model("Skill", skillSchema, "Skills")
