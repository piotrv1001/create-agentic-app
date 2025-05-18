import path from "path";
import fs from "fs/promises";
import { execa } from "execa";
import chalk from "chalk";
import { copyTemplateFile } from "./fileUtils.js";

// Function to add Mastra
export async function addMastra(projectPath) {
  console.log(chalk.green("\n🔮 Adding Mastra...\n"));
  
  // Initialize Mastra
  await execa("npx", ["mastra@latest", "init", "--default"], {
    cwd: projectPath,
    stdio: "inherit",
  });
  
  // Copy next.config.ts template
  await copyTemplateFile(
    "src/templates/mastra/next.config.ts", 
    path.join(projectPath, "next.config.ts")
  );
  
  // Update .gitignore
  await updateGitignore(projectPath);
}

// Helper function to update .gitignore
async function updateGitignore(projectPath) {
  try {
    const gitignorePath = path.join(projectPath, ".gitignore");
    try {
      await fs.access(gitignorePath);
      
      const gitignoreContent = await fs.readFile(gitignorePath, 'utf8');
      if (!gitignoreContent.includes('.mastra')) {
        const appendContent = gitignoreContent.endsWith('\n') 
          ? '\n.mastra\n' 
          : '\n\n.mastra\n';
          
        await fs.appendFile(gitignorePath, appendContent);
      }
    } catch (err) {
      // If .gitignore doesn't exist, create it with .mastra entry
      await fs.writeFile(gitignorePath, '.mastra\n');
    }
  } catch (error) {
    console.log(chalk.yellow("\n⚠️ Could not update .gitignore file. You may want to add .mastra to it manually.\n"));
  }
}
