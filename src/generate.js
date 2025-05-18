import chalk from "chalk";
import { createNextApp } from "./nextjs.js";
import { addShadcn } from "./shadcn.js";
import { addPrisma } from "./prisma.js";
import { addMastra } from "./mastra.js";
import { addCopilotKit } from "./copilotkit.js";
import { addVoice } from "./voice.js";

export async function scaffoldApp({
  projectName,
  shadcn,
  prisma,
  mastra,
  copilotKit,
  voice,
}) {
  // Create the Next.js app
  const projectPath = await createNextApp(projectName);

  // Optional: Add shadcn/ui
  if (shadcn) {
    await addShadcn(projectPath);
  }

  // Optional: Add Prisma
  if (prisma) {
    await addPrisma(projectPath);
  }

  // Optional: Add Mastra
  if (mastra) {
    await addMastra(projectPath);
  }

  // Optional: Add CopilotKit
  if (copilotKit) {
    await addCopilotKit(projectPath, voice);
  }

  // Optional: Add Voice capabilities
  if (voice && mastra && copilotKit) {
    await addVoice(projectPath);
  }

  // Display final instructions
  console.log(chalk.bold.green(`\n✅ Your app "${projectName}" is ready!\n`));
  console.log(chalk.gray(`  cd ${projectName}`));
  console.log(chalk.gray(`  npm install`));
  console.log(chalk.gray(`  npm run dev\n`));
}
