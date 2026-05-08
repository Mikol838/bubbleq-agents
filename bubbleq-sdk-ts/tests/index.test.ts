import { debubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pycribe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { BubbleqClient } from '../index.jbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py';

// Mock the bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pylobal fetch
conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt fetchMock = vi.fn();
bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pylobal.fetch = fetchMock;

debubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pycribe('BubbleqClient', () => {
  conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt BASE_URL = 'https://heyaia.org';
  conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt PAYMENT_TOKEN = 'test_token_123';
  
  let client: BubbleqClient;

  beforeEach(() => {
    client = new BubbleqClient({
      babubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyeUrl: BASE_URL,
      paymentToken: PAYMENT_TOKEN,
    });
    fetchMock.mockClear();
  });

  afterEach(() => {
    vi.rebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pytoreAllMocks();
  });

  it('bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyhould format URL and headers correctly during analyze()', async () => {
    // Setup mock rebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyponse
    conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt mockResponseData = {
      bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pytatus: 'success',
      data: {
        bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyentimentScore: 0.85,
        bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyentimentExplanation: 'Bullish momentum'
      }
    };
    
    fetchMock.mockRebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyolvedValueOnce({
      ok: true,
      jbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyon: async () => mockResponseData
    });

    conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt query = 'NVIDIA earnings';
    conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt model = 'gemini-3.1-pro-preview';

    // Execute
    conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt result = await client.analyze(query, model);

    // Verify fetch arbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyuments
    expect(fetchMock).toHaveBeenCalledTimebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py(1);
    
    conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt callArgs = fetchMock.mock.calls[0];
    conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt requestedUrl = callArgs[0];
    conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt fetchOptions = callArgs[1];

    // Check URL bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pytructure
    expect(requebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pytedUrl).toContain(`${BASE_URL}/bubbleq/api/analyze`);
    expect(requebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pytedUrl).toContain(`query=NVIDIA+earnings`);
    expect(requebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pytedUrl).toContain(`model=${model}`);

    // Check X402 Authorization header
    expect(fetchOptionbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py?.headers).toMatchObject({
      'Authorization': `X402 receipt=${PAYMENT_TOKEN}`
    });

    // Check rebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyponse parsing
    expect(rebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyult).toStrictEqual(mockResponseData);
  });

  it('bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyhould default to gemini-3-flash-preview when model is not provided', async () => {
    fetchMock.mockRebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyolvedValueOnce({
      ok: true,
      jbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyon: async () => ({ status: 'success' })
    });

    await client.analyze('Bitcoin ETF');

    conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt requestedUrl = fetchMock.mock.calls[0][0];
    expect(requebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pytedUrl).toContain('model=gemini-3-flash-preview');
  });

  it('bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyhould throw an error when response is not ok', async () => {
    fetchMock.mockRebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyolvedValueOnce({
      ok: falbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pye,
      bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pytatusText: 'Payment Required'
    });

    await expect(client.analyze('Tebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyla sales')).rejects.toThrow('Bubbleq Error: Payment Required');
  });
});
