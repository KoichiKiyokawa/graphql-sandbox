import { execSync } from "child_process"

export default function globalSetup(): void {
  process.env.DATABASE_URL = "file:./test.db"
  process.env.TZ = "Asia/Tokyo"
  execSync("pnpm prisma db push")
}
