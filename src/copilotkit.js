import path from "path";
import { execa } from "execa";
import chalk from "chalk";
import { copyTemplateFile } from "./fileUtils.js";

// Function to add CopilotKit
export async function addCopilotKit(projectPath, hasVoice) {
  console.log(chalk.green("\n🤖 Adding CopilotKit...\n"));
  
  // Install CopilotKit dependencies
  await execa(
    "npm",
    [
      "install",
      "@copilotkit/react-ui",
      "@copilotkit/react-core",
      "@copilotkit/runtime",
      "@mastra/client-js",
    ],
    {
      cwd: projectPath,
      stdio: "inherit",
    }
  );

  // Copy route.ts template
  await copyTemplateFile(
    "src/templates/copilotkit/route.ts",
    path.join(projectPath, "src/app/api/copilotkit/route.ts")
  );

  // Copy layout.tsx template (different based on voice feature)
  const layoutTemplatePath = hasVoice 
    ? "src/templates/voice/layout.tsx"
    : "src/templates/copilotkit/layout.tsx";
  
  await copyTemplateFile(
    layoutTemplatePath,
    path.join(projectPath, "src/app/layout.tsx")
  );

  // Copy page.tsx template
  await copyTemplateFile(
    "src/templates/copilotkit/page.tsx",
    path.join(projectPath, "src/app/page.tsx")
  );
}
