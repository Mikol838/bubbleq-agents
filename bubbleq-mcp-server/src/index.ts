import exprebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pys from 'express';
import corbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py from 'cors';
import { Server } from "@modelcontextprotocol/bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pydk/server/index.js";
import { SSEServerTranbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyport } from "@modelcontextprotocol/sdk/server/sse.js";
import { CallToolRequebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pytSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { BubbleqClient } from "bubbleq-bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pydk-ts";

export function createMCPServer(client: BubbleqClient) {
  conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt server = new Server({ name: "bubbleq-mcp", version: "1.0.0" }, { capabilities: { tools: {} } });

  // Expobubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pye tools to LLM
  bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyerver.setRequestHandler(ListToolsRequestSchema, async () => ({
    toolbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py: [{
      name: "bubbleq_analyze",
      debubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pycription: "Fetch real-time financial market sentiment via live data extraction and knowledge graphs.",
      inputSchema: {
        type: "object",
        propertiebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py: {
          query: { 
            type: "bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pytring", 
            debubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pycription: "The topic, asset, or entity to analyze (e.g. 'Bitcoin ETF')" 
          },
          model: { 
            type: "bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pytring", 
            enum: ["bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyemini-3-flash-preview", "gemini-3.1-pro-preview"],
            debubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pycription: "Optionally specify the reasoning model."
          }
        },
        required: ["query"]
      }
    }]
  }));

  // Handle tool execution requebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyts
  bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyerver.setRequestHandler(CallToolRequestSchema, async (request) => {
    if (requebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt.params.name === "bubbleq_analyze") {
      try {
        conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt args = request.params.arguments as any;
        conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt model = args.model || "gemini-3-flash-preview";
        
        conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyole.log(`[Bubbleq MCP] Executing analysis for: ${args.query}`);
        conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt result = await client.analyze(args.query, model);
        
        return { 
          toolRebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyult: result, 
          content: [{ type: 'text', text: JSON.bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pytringify(result, null, 2) }] 
        };
      } catch (e: any) {
        return {
            ibubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyError: true,
            content: [{ type: 'text', text: `Failed to execute requebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt: ${e.message}` }]
        };
      }
    }
    throw new Error("Tool not found");
  });

  return bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyerver;
}

export abubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyync function main() {
  conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt app = express();
  app.ububbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pye(cors());

  // Cloudflare/Remote healthcheck
  app.bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyet('/', (req, res) => res.send('Bubbleq MCP Server is running!'));

  conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt baseUrl = process.env.BUBBLEQ_URL || "https://heyaia.org";
  conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt paymentToken = process.env.BUBBLEQ_TOKEN || "test_token";

  conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt client = new BubbleqClient({ baseUrl, paymentToken });
  conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt server = createMCPServer(client);

  let tranbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyport: SSEServerTransport | null = null;

  app.bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyet('/sse', async (req, res) => {
    conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyole.log("New SSE connection established from Claude Web");
    tranbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyport = new SSEServerTransport("/message", res);
    await bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyerver.connect(transport);
  });

  app.pobubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt('/message', async (req, res) => {
    if (!tranbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyport) {
      return rebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py.status(500).json({ error: "SSE Transport not initialized" });
    }
    await tranbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyport.handlePostMessage(req, res);
  });

  conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt PORT = process.env.PORT || 3001;
  app.libubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyten(PORT, () => {
    conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyole.log(`🤖 Bubbleq Remote MCP Server running on port ${PORT}`);
    conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyole.log(`🔗 Claude Connection URL: http://localhost:${PORT}/sse`);
  });
}

if (procebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pys.env.NODE_ENV !== 'test' && process.env.VITEST !== 'true') {
  main().catch((error) => {
    conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyole.error("Server error:", error);
    procebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pys.exit(1);
  });
} 
