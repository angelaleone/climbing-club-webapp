import express from 'express'
import pool from './connection'
import cors from 'cors'
import { log } from 'console'
import type { Account } from '@/stores/accountStore'
import type { AttendanceSheet } from './types/AttendanceSheet'
import type { RideEvent } from './types/RideEvent'

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())

// accounts queries

//GET ALL accounts
app.get('/api/accounts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "Account"')
    res.json(result.rows)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server Error')
  }
})

//GET accounts by id
// app.get('/api/accounts/:id', async (req, res: any) => {
//   const { id } = req.params

//   try {
//     const result = await pool.query('SELECT * FROM "Account" WHERE accountID = $1', [id])
//     if (result.rows.length === 0) {
//       return res.status(404).json({ error: 'Account not found' })
//     }
//     return res.status(200).json(result.rows[0])
//   } catch (error) {
//     console.error('Error fetching account:', error)
//     return res.status(500).json({ error: 'Internal server error' })
//   }
// })

//GET accounts by ulid
app.get('/api/accounts/:username_ilstu', async (req, res: any) => {
  const { username_ilstu } = req.query
  try {
    const result = await pool.query('SELECT * FROM "Account" WHERE username_ilstu LIKE $1', [
      username_ilstu
    ])
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Account not found' })
    }

    return res.status(200).json(result.rows[0])
  } catch (error) {
    console.error('Error fetching:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
})

//POST account
app.post('/api/accounts/post', async (req: any, res: any) => {
  const {
    admin_user,
    first_name,
    last_name,
    phone,
    ilstu_email,
    username_ilstu,
    password
  }: Account = req.body

  try {
    const newAccount = await pool.query(
      'INSERT INTO "Account" (admin_user, first_name, last_name, phone, ilstu_email, username_ilstu, password) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [admin_user, first_name, last_name, phone, ilstu_email, username_ilstu, password]
    )
    return res.status(201).json(newAccount.rows[0])
  } catch (error) {
    console.error('Error creating account:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
})

// attendance queries

// GET all attendance sheets
app.get('/api/attendance', async (req: any, res: any) => {
  try {
    const result = await pool.query('SELECT * FROM "AttendanceSheet"')
    return res.json(result.rows)
  } catch (err) {
    console.error('Unknown error', err)
    res.status(500).send('Server Error')
  }
})

// GET attendance sheet by id
app.get('/api/attendance/:id', async (req, res: any) => {
  const { id } = req.params

  try {
    const result = await pool.query(
      'SELECT * FROM "AttendanceSheet" WHERE attendanceSheetID = $1',
      [id]
    )
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Attendance Sheet not found' })
    }
    return res.status(200).json(result.rows[0])
  } catch (error) {
    console.error('Error fetching attendance sheet:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
})

// POST attendance sheet
app.post('/api/attendance/post', async (req: any, res: any) => {
  const { adminID, attendees, date }: AttendanceSheet = req.body
  log('Request: ', attendees)
  log('Assertion: ', Array.isArray(attendees))

  try {
    const newAttendanceSheet = await pool.query(
      'INSERT INTO "AttendanceSheet" (adminid, attendees, date) VALUES ($1, $2, $3) RETURNING *',
      [adminID, attendees, date]
    )
    return res.status(201).json(newAttendanceSheet.rows[0])
  } catch (error) {
    console.error('Error creating attendance sheet:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
})

//UPDATE attendance sheet
app.put('/api/attendance/:id', async (req: any, res: any) => {
  const id = req.params.id
  const { accountIDs } = req.body

  try {
    const updatedSheet = await pool.query(
      'UPDATE "AttendanceSheet" SET attendees = $1 WHERE id = $2 RETURNING *',
      [accountIDs, id]
    )

    if (updatedSheet.rows.length === 0) {
      return res.status(404).json({ error: 'Record not found' })
    }

    return res.status(200).json(updatedSheet.rows[0])
  } catch (error) {
    console.error('Error updating accountIDs:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
})

//GET all ride events
app.get('/api/rideevent', async (req: any, res: any) => {
  try {
    const result = await pool.query('SELECT * FROM "RideEvent"')
    return res.json(result.rows)
  } catch (err) {
    console.error('Unknown error', err)
    res.status(500).send('Server Error')
  }
})

//POST ride event
app.post('/api/rideevent/post', async (req: any, res: any) => {
  const { location, date, name }: RideEvent = req.body

  try {
    const newRideEvent = await pool.query(
      'INSERT INTO "RideEvent" (location, date, name) VALUES ($1, $2, $3) RETURNING *',
      [location, date, name]
    )
    return res.status(201).json(newRideEvent.rows[0])
  } catch (error) {
    console.error('Error creating ride event:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
