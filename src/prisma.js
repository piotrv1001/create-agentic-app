import path from "path";
import { execa } from "execa";
import chalk from "chalk";
import { copyTemplateFile } from "./fileUtils.js";

// Function to add Prisma
export async function addPrisma(projectPath) {
  console.log(chalk.green("\n📦 Adding Prisma...\n"));
  
  // Install Prisma dependencies
  await execa("npm", ["install", "prisma", "@prisma/client"], {
    cwd: projectPath,
    stdio: "inherit",
  });
  
  // Copy schema.prisma template
  await copyTemplateFile(
    "src/templates/prisma/schema.prisma",
    path.join(projectPath, "prisma/schema.prisma")
  );
}
