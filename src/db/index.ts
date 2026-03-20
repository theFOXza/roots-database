import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

function getDb() {
  const databaseUrl = process.env.NEON_DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("NEON_DATABASE_URL is not set");
  }
  const sql = neon(databaseUrl);
  return drizzle(sql);
}

// Lazy singleton — only connects when actually used at runtime, not during build
let _db: ReturnType<typeof getDb> | null = null;

export const db = new Proxy({} as ReturnType<typeof getDb>, {
  get(_target, prop) {
    if (!_db) {
      _db = getDb();
    }
    return (_db as any)[prop];
  }
});
