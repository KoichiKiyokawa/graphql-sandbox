import { execSync } from "child_process"

export default function globalSetup(): void {
  process.env.DATABASE_URL = "file:./test.db"
  execSync("pnpm prisma db push")
}
