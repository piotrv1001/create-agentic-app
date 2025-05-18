#!/usr/bin/env node

import { introPrompt } from "./src/prompts.js";
import { scaffoldApp } from "./src/generate.js";

process.on("SIGINT", () => {
  console.log("\n🛑 Aborted.");
  process.exit(1);
});

const answers = await introPrompt();
await scaffoldApp(answers);
