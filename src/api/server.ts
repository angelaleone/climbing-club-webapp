import 'dotenv/config' //not sure if we need this import?
import pg from 'pg'
import * as dotenv from 'dotenv'
dotenv.config()

const { PG_DATABASE, PG_USER, PG_PASSWORD, PG_HOST } = process.env
console.log({ PG_DATABASE, PG_USER, PG_PASSWORD, PG_HOST })

const { Client } = pg
const client = new Client({
  user: PG_USER,
  password: PG_PASSWORD,
  host: PG_HOST,
  port: 5432,
  database: PG_DATABASE,
  ssl: {
    rejectUnauthorized: false
  }
})
await client.connect()

try {
  const res = await client.query('SELECT $1::text as message', ['Hello world!'])
  console.log(res.rows[0].message) // Hello world!
} catch (err) {
  console.error(err)
} finally {
  await client.end()
}
