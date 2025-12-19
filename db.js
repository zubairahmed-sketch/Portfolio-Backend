import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined")
}

let conn = null

export async function connectDB() {
  if (conn) {
    return conn
  }
  
  conn = await mongoose.connect(MONGODB_URI, {
    bufferCommands: false,
  })
  
  return conn
}
