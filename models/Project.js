import mongoose from "mongoose"

const projectSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  image: { type: String },
  technologies: { type: Array },
  liveLink: { type: String },
  codeLink: { type: String }
}, { timestamps: true })

export default mongoose.models.Project || mongoose.model("Project", projectSchema, "Projects")
