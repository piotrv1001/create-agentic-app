import path from "path";
import fs from "fs/promises";
import { execa } from "execa";
import chalk from "chalk";

// Function to add Shadcn UI
export async function addShadcn(projectPath) {
  console.log(chalk.green("\n✨ Adding shadcn/ui...\n"));
  await execa("npx", ["shadcn@latest", "init"], {
    cwd: projectPath,
    stdio: "inherit",
  });
}
