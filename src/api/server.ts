// import express from 'express'
// import { Pool } from 'pg'
// import cors from 'cors'

// const app = express()
// const PORT = process.env.PORT || 5000

// //cors middleware
// app.use(cors())
// app.use(express.json())
// const pool = new Pool({
//   user: 'postgres',
//   host: 'database-2.cne6wcmom0vn.us-east-1.rds.amazonaws.com',
//   database: 'climbing-club-db',
//   password: 'Climbingclub123',
//   port: 5432
// })

// app.get('/api/accounts', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * Accounts')
//     res.json(result.rows)
//   } catch (err) {
//     console.error(err)
//     res.status(500).send('Server error')
//   }
// })

// //start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`)
// })

const { Client } = require('pg')
require('dotenv').config()
;(async () => {
  const client = new Client({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE
  })
  await client.connect()
  const res = await client.query('SELECT $1::text as connected', [
    'Connection to postgres successful!'
  ])
  console.log(res.rows[0].connected)
  await client.end()
})()
