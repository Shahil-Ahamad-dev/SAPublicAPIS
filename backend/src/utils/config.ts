import { config } from "dotenv";

config({
  path: ".env",
});

export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: Number(process.env.PORT) || 4000,
  DATABASE_URL: process.env.DATABASE_URL || "",
  JWT_SECRET: process.env.JWT_SECRET || "",
  WHITELISTED_ORIGINS: process.env.WHITELISTED_ORIGINS || "",
} as const;