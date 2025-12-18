import express from 'express'
import { connectDB } from '../db.js'
import Project from '../models/Project.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    await connectDB()
    const projects = await Project.find().sort({ createdAt: -1 })
    res.json({ success: true, data: projects })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

router.post('/', async (req, res) => {
  try {
    await connectDB()
    const project = await Project.create(req.body)
    res.status(201).json({ success: true, data: project })
  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
  }
})

export default router
