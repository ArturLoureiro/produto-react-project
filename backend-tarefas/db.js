import pkg from "pg"
import dotenv from "dotenv"

dotenv.config()

const {Pool} = pkg
const pool = new Pool({

host: process.env.DB_HODT,
port: process.env.DB_PORT,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
databae: process.env.DB_NAME

})

export default pool