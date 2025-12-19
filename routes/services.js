import express from "express"
import { connectDB } from "../db.js"
import Service from "../models/Service.js"

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    await connectDB()
    console.log("Querying Services collection...")
    const services = await Service.find().lean()
    console.log(`Found ${services.length} services:`, services)
    res.json({ success: true, data: services })
  } catch (error) {
    console.error("Error fetching services:", error)
    res.status(500).json({ success: false, error: error.message })
  }
})

router.post("/", async (req, res) => {
  try {
    await connectDB()
    const service = await Service.create(req.body)
    res.status(201).json({ success: true, data: service })
  } catch (error) {
    console.error("Error creating service:", error)
    res.status(400).json({ success: false, error: error.message })
  }
})

export default router
