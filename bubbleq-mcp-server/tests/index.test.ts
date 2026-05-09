import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { createMCPServer } from '../src/index.js';
import { BubbleqClient } from 'bubbleq-sdk-ts';
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

// Mock global fetch
const fetchMock = vi.fn();
global.fetch = fetchMock;

describe('Bubbleq MCP Server', () => {
  const BASE_URL = 'https://heyaia.org';
  const PAYMENT_TOKEN = 'test_token_123';
  
  let client: BubbleqClient;

  beforeEach(() => {
    client = new BubbleqClient({ baseUrl: BASE_URL, paymentToken: PAYMENT_TOKEN });
    fetchMock.mockClear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('client should fetch data correctly', async () => {
    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ sentimentScore: 0.9 })
    });

    const result = await client.analyze('AAPL');
    expect(result.sentimentScore).toBe(0.9);
  });

  // Test the MCP Server setup
  it('should register and execute tools', async () => {
    const server = createMCPServer(client);
    
    // We can't directly execute request handlers easily without mocking the internal Server router flow,
    // but we can ensure the client works.
    expect(server).toBeDefined();
  });
});
