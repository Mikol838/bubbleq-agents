import express from 'express';
import cors from 'cors';
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { BubbleqClient } from "bubbleq-sdk-ts";

export function createMCPServer(client: BubbleqClient) {
  const server = new Server({ name: "bubbleq-mcp", version: "1.0.0" }, { capabilities: { tools: {} } });

  // Expose tools to LLM
  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: [{
      name: "bubbleq_analyze",
      description: "Fetch real-time financial market sentiment via live data extraction and knowledge graphs.",
      inputSchema: {
        type: "object",
        properties: {
          query: { 
            type: "string", 
            description: "The topic, asset, or entity to analyze (e.g. 'Bitcoin ETF')" 
          },
          model: { 
            type: "string", 
            enum: ["gemini-3-flash-preview", "gemini-3.1-pro-preview"],
            description: "Optionally specify the reasoning model."
          }
        },
        required: ["query"]
      }
    }]
  }));

  // Handle tool execution requests
  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    if (request.params.name === "bubbleq_analyze") {
      try {
        const args = request.params.arguments as any;
        const model = args.model || "gemini-3-flash-preview";
        
        console.log(`[Bubbleq MCP] Executing analysis for: ${args.query}`);
        const result = await client.analyze(args.query, model);
        
        return { 
          toolResult: result, 
          content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] 
        };
      } catch (e: any) {
        return {
            isError: true,
            content: [{ type: 'text', text: `Failed to execute request: ${e.message}` }]
        };
      }
    }
    throw new Error("Tool not found");
  });

  return server;
}

export async function main() {
  const app = express();
  app.use(cors());

  // Cloudflare/Remote healthcheck
  app.get('/', (req, res) => res.send('Bubbleq MCP Server is running!'));

  const baseUrl = process.env.BUBBLEQ_URL || "https://api.heyaia.org";
  const paymentToken = process.env.BUBBLEQ_TOKEN || "test_token";

  const client = new BubbleqClient({ baseUrl, paymentToken });
  const server = createMCPServer(client);

  let transport: SSEServerTransport | null = null;

  app.get('/sse', async (req, res) => {
    console.log("New SSE connection established from Claude Web");
    transport = new SSEServerTransport("/message", res);
    await server.connect(transport);
  });

  app.post('/message', async (req, res) => {
    if (!transport) {
      return res.status(500).json({ error: "SSE Transport not initialized" });
    }
    await transport.handlePostMessage(req, res);
  });

  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`🤖 Bubbleq Remote MCP Server running on port ${PORT}`);
    console.log(`🔗 Claude Connection URL: http://localhost:${PORT}/sse`);
  });
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
