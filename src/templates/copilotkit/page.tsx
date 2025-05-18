"use client";

import { useCopilotAction } from "@copilotkit/react-core";
import { CopilotChat } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

export default function Home() {
  useCopilotAction({
    name: "weatherTool",
    available: "disabled",
    render: ({ status, args }) => {
      return (
        <p className="text-gray-500 mt-2">
          {status !== "complete" && "Calling weather API..."}
          {status === "complete" &&
            `Called the weather API for ${args.location}.`}
        </p>
      );
    },
  });

  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="w-8/10 h-8/10 rounded-lg">
        <CopilotChat
          className="h-full w-full rounded-2xl py-6"
          labels={{ initial: "Hello, how can I help you today?" }}
        />
      </div>
    </div>
  );
}
