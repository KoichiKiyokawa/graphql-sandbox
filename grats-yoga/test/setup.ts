import fs from "fs";
import path from "path";

fs.rmSync(path.join(import.meta.dir, "../sqlite.test.db"));
Bun.spawnSync(["bun", "run", "migration:run"], {
  stdout: "inherit",
  stderr: "inherit",
});
