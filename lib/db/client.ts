// اتصال به PostgreSQL و نمونه‌ی Drizzle.
// این فایل فقط روی سرور باید اجرا شود؛ "server-only" از ایمپورت اشتباهی
// در کلاینت جلوگیری می‌کند.
import "server-only";

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error(
    "DATABASE_URL تنظیم نشده است. .env.local را با مقدار مناسب پر کنید (الگو در .env.example).",
  );
}

// max: 1 برای Serverless/edge-safety؛ در سرور Node با max بالا هم مشکلی نیست،
// ولی در حین توسعه و ISR کافی است.
const client = postgres(databaseUrl, { max: 10 });

export const db = drizzle(client, { schema });
