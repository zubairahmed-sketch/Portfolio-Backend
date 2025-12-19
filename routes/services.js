import express from "express"
import { connectDB } from "../db.js"

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const db = await connectDB()
    console.log("Connected to database, querying Services collection...")
    const services = await db.collection("Services").find({}).toArray()
    console.log(`Found ${services.length} services:`, services)
    res.json({ success: true, data: services })
  } catch (error) {
    console.error("Error fetching services:", error)
    res.status(500).json({ success: false, error: error.message })
  }
})

export default router
