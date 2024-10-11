import type { Config } from 'drizzle-kit';
import { defineConfig } from 'drizzle-kit';

/** @type {import('drizzle-kit').Config} */
export default defineConfig({
  out: './migrations',
  schema: './src/models/Schema.ts',
  driver: 'libsql',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DATABASE_URL ?? '',
    authToken: process.env.DATABASE_AUTH_TOKEN ?? '',
  },
} as Config);
