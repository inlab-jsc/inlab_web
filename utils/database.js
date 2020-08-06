import pgPromise from 'pg-promise'
import dotenv from 'dotenv'
import Promise from 'bluebird'

const pgp = pgPromise({promiseLib:Promise})
dotenv.config()

const DB_LOCK = Symbol.for("PG_DATABASE")
const globalSymbols = Object.getOwnPropertySymbols(global)
const hasDB = (globalSymbols.indexOf(DB_LOCK)> -1)
if(!hasDB){
  global[DB_LOCK] = pgp({
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    ssl: { rejectUnauthorized: false }
  })
}

const singletonDB = {}
Object.defineProperty(singletonDB,"instance",{
  get () {
    return global[DB_LOCK]
  }
}) 
Object.freeze(singletonDB)
export default singletonDB.instance