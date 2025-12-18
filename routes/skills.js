import express from 'express'
import { connectDB } from '../db.js'
import Skill from '../models/Skill.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    await connectDB()
    const skills = await Skill.find().sort({ createdAt: -1 })
    res.json({ success: true, data: skills })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

router.post('/', async (req, res) => {
  try {
    await connectDB()
    const skill = await Skill.create(req.body)
    res.status(201).json({ success: true, data: skill })
  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
  }
})

export default router
