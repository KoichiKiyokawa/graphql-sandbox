import nextJest from "next/jest"
import { type Config } from "jest"

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
})

export default createJestConfig({
  setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],
  globalSetup: "<rootDir>/test/global-setup.ts",
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
} satisfies Config)
