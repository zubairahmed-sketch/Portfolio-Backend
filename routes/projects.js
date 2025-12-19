import express from "express"
import mongoose from "mongoose"
import { connectDB } from "../db.js"

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    await connectDB()
    const db = mongoose.connection.db
    const projects = await db.collection("Projects").find({}).toArray()
    res.json({ success: true, data: projects })
  } catch (error) {
    console.error("Projects error:", error.message)
    res.status(500).json({ success: false, error: error.message })
  }
})

export default router
