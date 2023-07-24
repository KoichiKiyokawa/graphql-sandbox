import { execSync } from 'child_process'

export function setup(): void {
  process.env.NODE_ENV = 'development' // To show error logs
  process.env.DATABASE_URL = 'file:./test.db'
  execSync('pnpm prisma db push --force-reset --skip-generate', { stdio: 'inherit' })
}
