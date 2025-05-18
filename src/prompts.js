import prompts from "prompts";

export async function introPrompt() {
  const questions = [
    {
      type: "text",
      name: "projectName",
      message: "Project name:",
    },
    {
      type: "toggle",
      name: "shadcn",
      message: "Include shadcn/ui?",
      initial: true,
      active: "yes",
      inactive: "no",
    },
    {
      type: "toggle",
      name: "prisma",
      message: "Include Prisma ORM?",
      initial: true,
      active: "yes",
      inactive: "no",
    },
    {
      type: "toggle",
      name: "mastra",
      message: "Include Mastra?",
      initial: true,
      active: "yes",
      inactive: "no",
    },
    {
      type: "toggle",
      name: "copilotKit",
      message: "Include CopilotKit?",
      initial: true,
      active: "yes",
      inactive: "no",
    },
    {
      type: (_, values) => (values.mastra && values.copilotKit ? "toggle" : null),
      name: "voice",
      message: "Include voice?",
      initial: true,
      active: "yes",
      inactive: "no",
    },
  ];
  const response = await prompts(questions, {
    onCancel: () => {
      console.log("\n🛑 Aborted.");
      process.exit(1);
    },
  });

  return response;
}
