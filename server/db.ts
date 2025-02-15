// import { drizzle } from 'drizzle-orm/neon-http';
// import { neon } from '@neondatabase/serverless';
// import { companies } from '@shared/schema';

// if (!process.env.DATABASE_URL) {
//     throw new Error("DATABASE_URL is not set in the environment variables.");
// }

// const sql = neon(process.env.DATABASE_URL!);
// export const db = drizzle(sql, { schema: { companies } });

import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { companies } from "@shared/schema";
import dotenv from "dotenv"; // ✅ Import dotenv

dotenv.config(); // ✅ Load .env file

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("❌ DATABASE_URL is missing. Please check your .env file.");
}

const sql = neon(connectionString);
export const db = drizzle(sql, { schema: { companies } });

console.log("✅ Database connected successfully!");
