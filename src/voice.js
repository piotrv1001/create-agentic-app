import path from "path";
import { execa } from "execa";
import chalk from "chalk";
import { copyTemplateFile } from "./fileUtils.js";

// Function to add Voice capabilities
export async function addVoice(projectPath) {
  console.log(chalk.green("\n🎤 Adding voice capabilities...\n"));

  // Install voice dependencies
  await execa(
    "npm",
    ["install", "@mastra/voice-openai"],
    {
      cwd: projectPath,
      stdio: "inherit",
    }
  );

  // Copy agent.ts template
  await copyTemplateFile(
    "src/templates/voice/agent.ts",
    path.join(projectPath, "src/mastra/agents/index.ts")
  );
  
  // Copy tool.ts template
  await copyTemplateFile(
    "src/templates/voice/tool.ts",
    path.join(projectPath, "src/mastra/tools/index.ts")
  );
  
  // Copy transcribe-route.ts template
  await copyTemplateFile(
    "src/templates/voice/transcribe-route.ts",
    path.join(projectPath, "src/app/api/transcribe/route.ts")
  );
  
  // Copy tts-route.ts template
  await copyTemplateFile(
    "src/templates/voice/tts-route.ts",
    path.join(projectPath, "src/app/api/tts/route.ts")
  );
}
