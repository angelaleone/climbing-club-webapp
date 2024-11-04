import express from 'express'
import pool from './connection'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())

app.get('/api/accounts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "Account"')
    res.json(result.rows)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server Error')
  }


  
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
