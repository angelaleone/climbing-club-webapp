import express from 'express'
import { Pool } from 'pg'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000

//cors middleware
app.use(cors())
app.use(express.json())

const pool = new Pool({
  user: 'postgres',
  host: 'database-2.cne6wcmom0vn.us-east-1.rds.amazonaws.com ',
  database: 'climbing-club-db',
  password: 'Climbingclub123',
  port: 5432
})

app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * Accounts')
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).send('Server error')
  }
})

//start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
