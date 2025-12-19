import express from "express"
import { connectDB } from "../db.js"
import Project from "../models/Project.js"

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    await connectDB()
    console.log("Querying Projects collection...")
    const projects = await Project.find()
    console.log(`Found ${projects.length} projects:`, projects)
    res.json({ success: true, data: projects })
  } catch (error) {
    console.error("Error fetching projects:", error)
    res.status(500).json({ success: false, error: error.message })
  }
})

router.post("/", async (req, res) => {
  try {
    await connectDB()
    const project = await Project.create(req.body)
    res.status(201).json({ success: true, data: project })
  } catch (error) {
    console.error("Error creating project:", error)
    res.status(400).json({ success: false, error: error.message })
  }
})

export default router
