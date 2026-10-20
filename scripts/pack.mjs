/* ==========================================================================
   Crispo — pack the production build for a drag-and-drop deploy.

   Netlify Drop (https://app.netlify.com/drop) does NOT run a build. It
   serves whatever you upload as-is. So the upload has to be the *built*
   site, not the project.

   This script zips the contents of dist/ so there is one file to drop.

   Usage:
     npm run pack
   ========================================================================== */

import { spawnSync } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const ROOT = resolve(process.cwd());
const DIST = resolve(ROOT, "dist");

if (!existsSync(DIST)) {
  console.error("\n  ✗ dist/ does not exist. Run `npm run build` first.\n");
  process.exit(1);
}

const hasCommand = (command) =>
  spawnSync("sh", ["-c", `command -v ${command}`], { encoding: "utf8" }).status === 0;

const ZIP = resolve(ROOT, "crispo-deploy.zip");
const TAR = resolve(ROOT, "crispo-deploy.tar.gz");

rmSync(ZIP, { force: true });
rmSync(TAR, { force: true });

if (hasCommand("zip")) {
  const result = spawnSync("zip", ["-r", "-q", ZIP, "."], { cwd: DIST, stdio: "inherit" });

  if (result.status !== 0) {
    console.error("\n  ✗ zip failed.\n");
    process.exit(1);
  }

  console.log("\n  ✓ crispo-deploy.zip\n");
  console.log("  Upload it at https://app.netlify.com/drop");
  console.log("  (or drag the dist/ folder in directly)\n");
} else if (hasCommand("tar")) {
  const result = spawnSync("tar", ["-czf", TAR, "-C", DIST, "."], { stdio: "inherit" });

  if (result.status !== 0) {
    console.error("\n  ✗ tar failed.\n");
    process.exit(1);
  }

  console.log("\n  ✓ crispo-deploy.tar.gz\n");
  console.log("  Upload it at https://app.netlify.com/drop");
  console.log("  (or drag the dist/ folder in directly)\n");
} else {
  console.log("\n  No zip or tar available — drag the dist/ folder in directly:");
  console.log(`  ${DIST}\n`);
}
