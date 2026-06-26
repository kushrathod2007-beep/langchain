C:\Users\htmc7\langchain-typescript-ai-app\src\tools\calculatorTool.ts
export function calculator(expression: string): string {
  try {
    const answer = Function(
      `"use strict"; return (${expression})`
    )();

    return `Calculation Result: ${answer}`;
  } catch {
    return "Invalid Expression";
  }
}
