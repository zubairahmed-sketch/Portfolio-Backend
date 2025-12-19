import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import skillsRoute from "./routes/skills.js"
import servicesRoute from "./routes/services.js"
import projectsRoute from "./routes/projects.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.json({ message: "Portfolio Backend API" })
})

app.use("/api/skills", skillsRoute)
app.use("/api/services", servicesRoute)
app.use("/api/projects", projectsRoute)

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`)
})
