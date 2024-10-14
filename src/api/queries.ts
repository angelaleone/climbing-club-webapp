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
