import { MastraClient } from "@mastra/client-js";

export async function POST(req: Request): Promise<Response> {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return new Response("File not provided", { status: 400 });
    }

    const baseUrl = process.env.MASTRA_BASE_URL || "http://localhost:4111";

    const mastra = new MastraClient({
      baseUrl,
    });
    const agent = mastra.getAgent("weatherAgent");
    const transcription = await agent.voice.listen(file);

    return new Response(JSON.stringify(transcription), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
