import OpenAI from "openai";

const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";

let client: OpenAI | null = null;

/**
 * Lazily constructs the OpenAI SDK client for OpenRouter.
 * Do not instantiate `new OpenAI()` at module scope — missing `OPENROUTER_API_KEY`
 * causes the SDK to throw during `next build` when route modules are loaded.
 */
export function getOpenRouterClient(): OpenAI {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new Error("OPENROUTER_API_KEY is not configured");
  }
  if (!client) {
    client = new OpenAI({
      apiKey,
      baseURL: OPENROUTER_BASE_URL,
    });
  }
  return client;
}
