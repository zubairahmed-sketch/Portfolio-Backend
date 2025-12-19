import express from "express"
import mongoose from "mongoose"
import { connectDB } from "../db.js"

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    await connectDB()
    const db = mongoose.connection.db
    const services = await db.collection("Services").find({}).toArray()
    res.json({ success: true, data: services })
  } catch (error) {
    console.error("Services error:", error.message)
    res.status(500).json({ success: false, error: error.message })
  }
})

export default router
