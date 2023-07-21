import { execSync } from "child_process";

execSync("pnpm prisma db push --force-reset --skip-generate", { stdio: "inherit" });
