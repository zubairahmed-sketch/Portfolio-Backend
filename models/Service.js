import mongoose from "mongoose"

const serviceSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  icon: { type: String },
  technologies: { type: Array },
  link: { type: String }
}, { timestamps: true })

export default mongoose.models.Service || mongoose.model("Service", serviceSchema, "Services")
