import express from "express"
import { connectDB } from "../db.js"

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const db = await connectDB()
    console.log("Connected to database, querying Projects collection...")
    const projects = await db.collection("Projects").find({}).toArray()
    console.log(`Found ${projects.length} projects:`, projects)
    res.json({ success: true, data: projects })
  } catch (error) {
    console.error("Error fetching projects:", error)
    res.status(500).json({ success: false, error: error.message })
  }
})

export default router
