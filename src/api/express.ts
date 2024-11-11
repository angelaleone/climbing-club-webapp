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

app.get('/api/accounts/:id', async (req, res: any) => {
  const { id } = req.params

  try {
    const result = await pool.query('SELECT * FROM "Account" WHERE accountID = $1', [id])
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Account not found' })
    }
    return res.status(200).json(result.rows[0])
  } catch (error) {
    console.error('Error fetching account:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
