import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import servicesRoute from './routes/services.js'
import projectsRoute from './routes/projects.js'
import skillsRoute from './routes/skills.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/services', servicesRoute)
app.use('/api/projects', projectsRoute)
app.use('/api/skills', skillsRoute)

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Backend Server Running' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
