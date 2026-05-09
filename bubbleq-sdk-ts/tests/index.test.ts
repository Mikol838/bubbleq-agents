import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { BubbleqClient } from '../index.js';

// Mock the global fetch
const fetchMock = vi.fn();
global.fetch = fetchMock;

describe('BubbleqClient', () => {
  const BASE_URL = 'https://heyaia.org';
  const PAYMENT_TOKEN = 'test_token_123';
  
  let client: BubbleqClient;

  beforeEach(() => {
    client = new BubbleqClient({
      baseUrl: BASE_URL,
      paymentToken: PAYMENT_TOKEN,
    });
    fetchMock.mockClear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should format URL and headers correctly during analyze()', async () => {
    // Setup mock response
    const mockResponseData = {
      status: 'success',
      data: {
        sentimentScore: 0.85,
        sentimentExplanation: 'Bullish momentum'
      }
    };
    
    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponseData
    });

    const query = 'NVIDIA earnings';
    const model = 'gemini-3.1-pro-preview';

    // Execute
    const result = await client.analyze(query, model);

    // Verify fetch arguments
    expect(fetchMock).toHaveBeenCalledTimes(1);
    
    const callArgs = fetchMock.mock.calls[0];
    const requestedUrl = callArgs[0];
    const fetchOptions = callArgs[1];

    // Check URL structure
    expect(requestedUrl).toContain(`${BASE_URL}/api/agent/analyze`);
    expect(requestedUrl).toContain(`query=NVIDIA+earnings`);
    expect(requestedUrl).toContain(`model=${model}`);

    // Check X402 Authorization header
    expect(fetchOptions?.headers).toMatchObject({
      'Authorization': `X402 receipt=${PAYMENT_TOKEN}`
    });

    // Check response parsing
    expect(result).toStrictEqual(mockResponseData);
  });

  it('should default to gemini-3-flash-preview when model is not provided', async () => {
    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ status: 'success' })
    });

    await client.analyze('Bitcoin ETF');

    const requestedUrl = fetchMock.mock.calls[0][0];
    expect(requestedUrl).toContain('model=gemini-3-flash-preview');
  });

  it('should throw an error when response is not ok', async () => {
    fetchMock.mockResolvedValueOnce({
      ok: false,
      statusText: 'Payment Required'
    });

    await expect(client.analyze('Tesla sales')).rejects.toThrow('Bubbleq Error: Payment Required');
  });
});
