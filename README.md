# Portfolio Backend API

Minimal Express + MongoDB backend powering the dynamic content for Zubair Ahmed's portfolio website.

##  Features
- REST endpoints for skills, services, and projects collections
- Native MongoDB driver with connection pooling and caching
- Hosted on Railway with environment-based configuration
- CORS + JSON middleware ready for frontend consumption

##  Endpoints
| Method | Route | Description |
| --- | --- | --- |
| GET | /api/skills | Fetch all skill categories |
| GET | /api/services | Fetch all service offerings |
| GET | /api/projects | Fetch all portfolio projects |

##  Tech Stack
- Node.js 18
- Express 4
- MongoDB Node Driver 6
- Dotenv + CORS

##  Installation
`ash
npm install
npm run start
`
The server defaults to port 8080.

##  Environment Variables
Create a .env file with:
`
MONGODB_URI=your_mongodb_connection_string
PORT=8080 # optional
`

##  Deployment (Railway)
1. Push the repo to GitHub
2. Create a new Railway service from the repo
3. Add MONGODB_URI as a service variable
4. Redeploy  Railway will run 
pm install and 
pm start

##  Integration
The frontend calls these endpoints using a Railway domain such as:
`
https://portfolio-backend-production-xxxx.up.railway.app/api/services
`
Update the production domain in the React components when deploying.

##  Testing
Verify each endpoint locally:
`ash
curl http://localhost:8080/api/skills
`
You should receive a JSON payload containing the documents from MongoDB.

---
Maintained by Zubair Ahmed.
