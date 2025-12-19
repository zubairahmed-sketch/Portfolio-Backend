import express from "express"
import { connectDB } from "../db.js"
import Skill from "../models/Skill.js"

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    await connectDB()
    console.log("Querying Skills collection...")
    const skills = await Skill.find().lean()
    console.log(`Found ${skills.length} skills:`, skills)
    res.json({ success: true, data: skills })
  } catch (error) {
    console.error("Error fetching skills:", error)
    res.status(500).json({ success: false, error: error.message })
  }
})

router.post("/", async (req, res) => {
  try {
    await connectDB()
    const skill = await Skill.create(req.body)
    res.status(201).json({ success: true, data: skill })
  } catch (error) {
    console.error("Error creating skill:", error)
    res.status(400).json({ success: false, error: error.message })
  }
})

export default router
