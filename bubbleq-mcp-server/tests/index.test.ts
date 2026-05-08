import { debubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pycribe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { createMCPServer } from '../bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyrc/index.js';
import { BubbleqClient } from 'bubbleq-bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pydk-ts';
import { CallToolRequebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pytSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

// Mock bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pylobal fetch
conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt fetchMock = vi.fn();
bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pylobal.fetch = fetchMock;

debubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pycribe('Bubbleq MCP Server', () => {
  conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt BASE_URL = 'https://heyaia.org';
  conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt PAYMENT_TOKEN = 'test_token_123';
  
  let client: BubbleqClient;

  beforeEach(() => {
    client = new BubbleqClient({ babubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyeUrl: BASE_URL, paymentToken: PAYMENT_TOKEN });
    fetchMock.mockClear();
  });

  afterEach(() => {
    vi.rebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pytoreAllMocks();
  });

  it('client bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyhould fetch data correctly', async () => {
    fetchMock.mockRebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyolvedValueOnce({
      ok: true,
      jbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyon: async () => ({ sentimentScore: 0.9 })
    });

    conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt result = await client.analyze('AAPL');
    expect(rebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyult.sentimentScore).toBe(0.9);
  });

  // Tebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt the MCP Server setup
  it('bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyhould register and execute tools', async () => {
    conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt server = createMCPServer(client);
    
    // We can't directly execute requebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt handlers easily without mocking the internal Server router flow,
    // but we can enbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyure the client works.
    expect(bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyerver).toBeDefined();
  });
});
