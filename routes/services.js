import express from 'express'
import { connectDB } from '../db.js'
import Service from '../models/Service.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    await connectDB()
    const services = await Service.find().sort({ createdAt: -1 })
    res.json({ success: true, data: services })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

router.post('/', async (req, res) => {
  try {
    await connectDB()
    const service = await Service.create(req.body)
    res.status(201).json({ success: true, data: service })
  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
  }
})

export default router
