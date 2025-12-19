import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { MongoClient } from "mongodb"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080
const MONGODB_URI = process.env.MONGODB_URI

let mongoClient

async function connectMongo() {
  if (mongoClient) return mongoClient.db("Portfolio")
  
  mongoClient = new MongoClient(MONGODB_URI)
  await mongoClient.connect()
  console.log(" Connected to MongoDB")
  return mongoClient.db("Portfolio")
}

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.json({ message: "Portfolio API Running" })
})

app.get("/api/skills", async (req, res) => {
  try {
    const db = await connectMongo()
    const skills = await db.collection("Skills").find({}).toArray()
    res.json({ success: true, data: skills })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

app.get("/api/services", async (req, res) => {
  try {
    const db = await connectMongo()
    const services = await db.collection("Services").find({}).toArray()
    res.json({ success: true, data: services })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

app.get("/api/projects", async (req, res) => {
  try {
    const db = await connectMongo()
    const projects = await db.collection("Projects").find({}).toArray()
    res.json({ success: true, data: projects })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`)
})
