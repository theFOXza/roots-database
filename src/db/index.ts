import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

const databaseUrl = process.env.NEON_DATABASE_URL!;

const sql = neon(databaseUrl);

export const db = drizzle(sql);
