import * as dotenv from 'dotenv'
import pg from 'pg'
const { Pool } = pg

dotenv.config()
const { PG_DATABASE, PG_USER, PG_PASSWORD, PG_HOST, PG_PORT } = process.env
console.log({ PG_DATABASE, PG_USER, PG_PASSWORD, PG_HOST })
const pool = new Pool({
  user: PG_USER,
  password: PG_PASSWORD,
  host: PG_HOST,
  port: Number(PG_PORT) || 5432,
  database: PG_DATABASE,
  ssl: {
    rejectUnauthorized: false
  }
})

export default pool
