C:\Users\htmc7\langchain-typescript-ai-app\src\memory\chatMemory.ts
import dotenv from "dotenv";
dotenv.config();

import { ChatGroq } from "@langchain/groq";
import { supportPrompt } from "../prompts/supportPrompt.js";

export async function runSupportChain(input: string): Promise<string> {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    throw new Error("GROQ_API_KEY is missing in .env");
  }

  const model = new ChatGroq({
    apiKey,
    model: "llama-3.3-70b-versatile",
    temperature: 0.7,
  });

  const prompt = await supportPrompt.invoke({
    input,
  });

  const response = await model.invoke(prompt);

  return response.content.toString();
}
