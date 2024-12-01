import { Pool } from 'pg' //Import the pool
import * as dotenv from 'dotenv'

const pool = new Pool()

dotenv.config()

// Create Account
export const createAccount = async (
  admin_user: string,
  first_name: string,
  last_name: string,
  phone: string,
  ilstu_email: string,
  username_ilstu: string,
  password: string
) => {
  try {
    const newAccount = await pool.query(
      'INSERT INTO "Account" (admin_user, first_name, last_name, phone, ilstu_email, username_ilstu, password) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [admin_user, first_name, last_name, phone, ilstu_email, username_ilstu, password]
    )
    return newAccount.rows[0]
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error('Unknown error', err)
    }
    throw new Error('Server Error')
  }
}

// Get All Accounts
export const getAllAccounts = async () => {
  try {
    const accounts = await pool.query('SELECT * FROM "Account"')
    return accounts.rows
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error('Unknown error', err)
    }
    throw new Error('Server Error')
  }
}

// Get Account by ID
export const getAccountById = async (id: string) => {
  try {
    const account = await pool.query('SELECT * FROM "Account" WHERE accountID = $1', [id])
    if (account.rows.length === 0) {
      throw new Error('Account not found')
    }
    return account.rows[0]
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error('Unknown error', err)
    }
    throw new Error('Server Error')
  }
}

// Update Account
export const updateAccount = async (
  id: string,
  admin_user: string,
  first_name: string,
  last_name: string,
  phone: string,
  ilstu_email: string,
  username_ilstu: string,
  password: string
) => {
  try {
    const updatedAccount = await pool.query(
      'UPDATE "Account" SET admin_user = $1, first_name = $2, last_name = $3, phone = $4, ilstu_email = $5, username_ilstu = $6, password = $7 WHERE accountID = $8 RETURNING *',
      [admin_user, first_name, last_name, phone, ilstu_email, username_ilstu, password, id]
    )

    if (updatedAccount.rows.length === 0) {
      throw new Error('Account not found')
    }
    return updatedAccount.rows[0]
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error('Unknown error', err)
    }
    throw new Error('Server Error')
  }
}

// Delete Account
export const deleteAccount = async (id: string) => {
  try {
    const deletedAccount = await pool.query(
      'DELETE FROM "Account" WHERE accountID = $1 RETURNING *',
      [id]
    )
    if (deletedAccount.rows.length === 0) {
      throw new Error('Account not found')
    }
    return deletedAccount.rows[0]
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error('Unknown error', err)
    }
    throw new Error('Server Error')
  }
}

// Create AttendanceSheet
export const createAttendanceSheet = async (
  admin_user: string,
  adminID: string,
  attendees: string[]
) => {
  try {
    const newAttendanceSheet = await pool.query(
      'INSERT INTO "AttendanceSheet" (adminID, attendees, date) VALUES ($1, $2, $3) RETURNING *',
      [admin_user, adminID, attendees]
    )
    return newAttendanceSheet.rows[0]
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error('Unknown error', err)
    }
    throw new Error('Server Error')
  }
}

// Get All AttendanceSheets
export const getAllAttendanceSheets = async () => {
  try {
    const AttendanceSheets = await pool.query('SELECT * FROM "AttendanceSheet"')
    return AttendanceSheets.rows
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error('Unknown error', err)
    }
    throw new Error('Server Error')
  }
}

// Get AttendanceSheet by ID
export const getAttendanceSheetById = async (id: string) => {
  try {
    const AttendanceSheet = await pool.query(
      'SELECT * FROM "AttendanceSheet" WHERE attendanceSheetID = $1',
      [id]
    )
    if (AttendanceSheet.rows.length === 0) {
      throw new Error('Attendance Sheet not found')
    }
    return AttendanceSheet.rows[0]
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error('Unknown error', err)
    }
    throw new Error('Server Error')
  }
}

// Update AttendanceSheet
export const updateAttendanceSheet = async (
  admin_user: string,
  adminID: string,
  attendees: string[]
) => {
  try {
    const updatedAttendanceSheet = await pool.query(
      'UPDATE "AttendanceSheet" SET admin_user = $1, adminID = $2, attendees = $3 WHERE attendanceSheetID = $4 RETURNING *',
      [admin_user, adminID, attendees]
    )

    if (updatedAttendanceSheet.rows.length === 0) {
      throw new Error('Attendance Sheet not found')
    }
    return updatedAttendanceSheet.rows[0]
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error('Unknown error', err)
    }
    throw new Error('Server Error')
  }
}

// Delete AttendanceSheet
export const deleteAttendanceSheet = async (id: string) => {
  try {
    const deletedAttendanceSheet = await pool.query(
      'DELETE FROM "AttendanceSheet" WHERE attendanceSheetID = $1 RETURNING *',
      [id]
    )
    if (deletedAttendanceSheet.rows.length === 0) {
      throw new Error('Attendance Sheet not found')
    }
    return deletedAttendanceSheet.rows[0]
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error('Unknown error', err)
    }
    throw new Error('Server Error')
  }
}

// Get All Passengers
export const getAllPassengers = async () => {
  try {
    const Passengers = await pool.query('SELECT * FROM "Passenger"')
    return Passengers.rows
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error('Unknown error', err)
    }
    throw new Error('Server Error')
  }
}

// Get Passenger by ID
export const getPassengerById = async (id: string) => {
  try {
    const Passenger = await pool.query('SELECT * FROM "Passenger" WHERE passengerID = $1', [id])
    if (Passenger.rows.length === 0) {
      throw new Error('Attendance Sheet not found')
    }
    return Passenger.rows[0]
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error('Unknown error', err)
    }
    throw new Error('Server Error')
  }
}

// Update Passenger
export const updatePassenger = async (passengerID: string, accountID: string) => {
  try {
    const updatedPassenger = await pool.query(
      'UPDATE "Passenger" SET passengerID = $1, accountID = $2 RETURNING *',
      [passengerID, accountID]
    )

    if (updatedPassenger.rows.length === 0) {
      throw new Error('Passenger not found')
    }
    return updatedPassenger.rows[0]
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error('Unknown error', err)
    }
    throw new Error('Server Error')
  }
}

// Delete Passenger
export const deletePassenger = async (id: string) => {
  try {
    const deletedPassenger = await pool.query(
      'DELETE FROM "Passenger" WHERE passengerID = $1 RETURNING *',
      [id]
    )
    if (deletedPassenger.rows.length === 0) {
      throw new Error('Passenger not found')
    }
    return deletedPassenger.rows[0]
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error('Unknown error', err)
    }
    throw new Error('Server Error')
  }
}

// Create Passenger
export const createPassenger = async (passengerID: string, accountID: string) => {
  try {
    const newPassenger = await pool.query(
      'INSERT INTO "Passenger" (passengerID, accountID) VALUES ($1, $2) RETURNING *',
      [passengerID, accountID]
    )
    return newPassenger.rows[0]
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error('Unknown error', err)
    }
    throw new Error('Server Error')
  }
}

// Create Ride
export const createRide = async (
  rideID: string,
  driverID: string,
  rideEventID: string,
  passengerID: string,
  num_of_seats: string
) => {
  try {
    const newRide = await pool.query(
      'INSERT INTO "Ride" (rideID, driverID, rideEventID, passengerID, num_of_seats) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [rideID, driverID, rideEventID, passengerID, num_of_seats]
    )
    return newRide.rows[0]
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error('Unknown error', err)
    }
    throw new Error('Server Error')
  }
}

// Get All Rides
export const getAllRides = async () => {
  try {
    const Rides = await pool.query('SELECT * FROM "Ride"')
    return Rides.rows
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error('Unknown error', err)
    }
    throw new Error('Server Error')
  }
}

// Get Ride by ID
export const getRideById = async (id: string) => {
  try {
    const Ride = await pool.query('SELECT * FROM "Ride" WHERE rideID = $1', [id])
    if (Ride.rows.length === 0) {
      throw new Error('Ride not found')
    }
    return Ride.rows[0]
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error('Unknown error', err)
    }
    throw new Error('Server Error')
  }
}

// Update Ride
export const updateRide = async (
  rideID: string,
  driverID: string,
  rideEventID: string,
  passengerID: string,
  num_of_seats: string
) => {
  try {
    const updatedRide = await pool.query(
      'UPDATE "Ride" SET rideID = $1, driverID = $2, rideEventID = $3, passengerID = $4, num_of_seats = $5 RETURNING *',
      [rideID, driverID, rideEventID, passengerID, num_of_seats]
    )

    if (updatedRide.rows.length === 0) {
      throw new Error('Ride not found')
    }
    return updatedRide.rows[0]
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error('Unknown error', err)
    }
    throw new Error('Server Error')
  }
}

// Delete Ride
export const deleteRide = async (id: string) => {
  try {
    const deletedRide = await pool.query('DELETE FROM "Ride" WHERE rideID = $1 RETURNING *', [id])
    if (deletedRide.rows.length === 0) {
      throw new Error('Ride not found')
    }
    return deletedRide.rows[0]
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error('Unknown error', err)
    }
    throw new Error('Server Error')
  }
}

// Create RideEvent
export const createRideEvent = async (
  rideEventID: string,
  location: string,
  date: string,
  time: string,
  name: string
) => {
  try {
    const newRideEvent = await pool.query(
      'INSERT INTO "RideEvent" (rideEventID, location, date, time, name) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [rideEventID, location, date, time, name]
    )
    return newRideEvent.rows[0]
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error('Unknown error', err)
    }
    throw new Error('Server Error')
  }
}

// Get All RideEvents
export const getAllRideEvents = async () => {
  try {
    const RideEvents = await pool.query('SELECT * FROM "RideEvent"')
    return RideEvents.rows
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error('Unknown error', err)
    }
    throw new Error('Server Error')
  }
}

// Get RideEvent by ID
export const getRideEventById = async (id: string) => {
  try {
    const RideEvent = await pool.query('SELECT * FROM "RideEvent" WHERE rideEventID = $1', [id])
    if (RideEvent.rows.length === 0) {
      throw new Error('Ride Event not found')
    }
    return RideEvent.rows[0]
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error('Unknown error', err)
    }
    throw new Error('Server Error')
  }
}

// Update RideEvent
export const updateRideEvent = async (
  rideEventID: string,
  location: string,
  date: string,
  time: string,
  name: string
) => {
  try {
    const updatedRideEvent = await pool.query(
      'UPDATE "RideEvent" SET RideEventID = $1, driverID = $2, RideEventEventID = $3, passengerID = $4, num_of_seats = $5 RETURNING *',
      [rideEventID, location, date, time, name]
    )

    if (updatedRideEvent.rows.length === 0) {
      throw new Error('Ride Event not found')
    }
    return updatedRideEvent.rows[0]
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error('Unknown error', err)
    }
    throw new Error('Server Error')
  }
}

// Delete RideEvent
export const deleteRideEvent = async (id: string) => {
  try {
    const deletedRideEvent = await pool.query(
      'DELETE FROM "RideEvent" WHERE RideEventID = $1 RETURNING *',
      [id]
    )
    if (deletedRideEvent.rows.length === 0) {
      throw new Error('RideEvent not found')
    }
    return deletedRideEvent.rows[0]
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error('Unknown error', err)
    }
    throw new Error('Server Error')
  }
}
