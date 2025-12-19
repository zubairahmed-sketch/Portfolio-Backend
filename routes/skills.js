import express from "express"
import { connectDB } from "../db.js"

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const db = await connectDB()
    console.log("Connected to database, querying Skills collection...")
    const skills = await db.collection("Skills").find({}).toArray()
    console.log(`Found ${skills.length} skills:`, skills)
    res.json({ success: true, data: skills })
  } catch (error) {
    console.error("Error fetching skills:", error)
    res.status(500).json({ success: false, error: error.message })
  }
})

export default router
