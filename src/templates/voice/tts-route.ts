import { MastraClient } from "@mastra/client-js";

export async function GET(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const text = url.searchParams.get("text");

  if (!text) {
    return new Response("Text parameter is missing", { status: 400 });
  }

  const baseUrl = process.env.MASTRA_BASE_URL || "http://localhost:4111";

  const mastra = new MastraClient({
    baseUrl,
  });
  const agent = mastra.getAgent("weatherAgent");
  const response = await agent.voice.speak(text);

  return response;
}
