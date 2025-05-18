import { Tool } from "@mastra/core/tool";

export const weatherTool = new Tool({
  name: "weatherTool",
  description: "Get current weather information for a location",
  parameters: {
    type: "object",
    properties: {
      location: {
        type: "string",
        description: "Location name (city, region, etc.)",
      },
    },
    required: ["location"],
  },
  execute: async ({ location }) => {
    // Mock weather data for demo purposes
    const conditions = ["sunny", "partly cloudy", "cloudy", "rainy", "thunderstorm", "snowy"];
    const condition = conditions[Math.floor(Math.random() * conditions.length)];
    const temperature = Math.floor(Math.random() * 35) + 0; // 0 to 35°C
    const humidity = Math.floor(Math.random() * 60) + 30; // 30% to 90%
    const windSpeed = Math.floor(Math.random() * 30) + 1; // 1 to 30 km/h

    return {
      location,
      condition,
      temperature: `${temperature}°C`,
      humidity: `${humidity}%`,
      wind: `${windSpeed} km/h`,
      updated: new Date().toLocaleTimeString(),
    };
  },
});
