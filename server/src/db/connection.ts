import postgres from 'postgres'
import { env } from '../env.ts'

export const sql = postgres(env.DATABSE_URL)

const result = await sql`SELECT 'Hello' as message`