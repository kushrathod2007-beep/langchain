C:\Users\htmc7\langchain-typescript-ai-app\src\agents\supportAgent.ts
import { runSupportChain } from "../chains/supportChain.js";
import { calculator } from "../tools/calculatorTool.js";
import {
  addUserMessage,
  addAssistantMessage,
} from "../memory/chatMemory.js";

export async function supportAgent(input: string): Promise<string> {

  addUserMessage(input);

  let response: string;

  if (/^[0-9+\-*/(). ]+$/.test(input)) {
    response = calculator(input);
  } else {
    response = await runSupportChain(input);
  }

  addAssistantMessage(response);

  return response;
}
