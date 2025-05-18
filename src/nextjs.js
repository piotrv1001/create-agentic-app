import { execa } from "execa";
import path from "path";
import chalk from "chalk";

// Function to create a new Next.js app
export async function createNextApp(projectName) {
  console.log(chalk.cyan(`\n🛠 Creating Next.js app: ${projectName}...\n`));

  await execa(
    "npx",
    [
      "create-next-app@latest",
      projectName,
      "--ts",
      "--tailwind",
      "--eslint",
      "--app",
      "--src-dir",
      "--turbopack",
      "--import-alias",
      "@/*",
      "--use-npm",
      "--skip-install",
      "--yes",
    ],
    {
      stdio: "inherit",
    }
  );

  return path.resolve(projectName);
}
