import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { MongoClient } from "mongodb"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080
const MONGODB_URI = process.env.MONGODB_URI

let mongoClient
let db

async function connectMongo() {
  if (db) return db
  
  mongoClient = new MongoClient(MONGODB_URI)
  await mongoClient.connect()
  
  // Get the database - try "Portfolio" first, then list all
  const adminDb = mongoClient.db("admin")
  const databases = await adminDb.admin().listDatabases()
  console.log("Available databases:", databases.databases.map(d => d.name))
  
  // Use the first non-system database or "Portfolio"
  const dbName = databases.databases.find(d => !d.name.startsWith("admin") && d.name !== "local")?.name || "Portfolio"
  db = mongoClient.db(dbName)
  console.log(` Using database: ${dbName}`)
  
  return db
}

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.json({ message: "Portfolio API Running" })
})

app.get("/api/skills", async (req, res) => {
  try {
    const database = await connectMongo()
    const skills = await database.collection("Skills").find({}).toArray()
    console.log(`Found ${skills.length} skills`)
    res.json({ success: true, data: skills })
  } catch (error) {
    console.error("Skills error:", error.message)
    res.status(500).json({ success: false, error: error.message })
  }
})

app.get("/api/services", async (req, res) => {
  try {
    const database = await connectMongo()
    const services = await database.collection("Services").find({}).toArray()
    console.log(`Found ${services.length} services`)
    res.json({ success: true, data: services })
  } catch (error) {
    console.error("Services error:", error.message)
    res.status(500).json({ success: false, error: error.message })
  }
})

app.get("/api/projects", async (req, res) => {
  try {
    const database = await connectMongo()
    const projects = await database.collection("Projects").find({}).toArray()
    console.log(`Found ${projects.length} projects`)
    res.json({ success: true, data: projects })
  } catch (error) {
    console.error("Projects error:", error.message)
    res.status(500).json({ success: false, error: error.message })
  }
})

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`)
})
