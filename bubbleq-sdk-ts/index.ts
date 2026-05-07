export class BubbleqClient {
  private baseUrl: string;
  private paymentToken: string;

  constructor(opts: { baseUrl: string; paymentToken: string }) {
    this.baseUrl = opts.baseUrl;
    this.paymentToken = opts.paymentToken;
  }

  async analyze(query: string, model: 'gemini-3.1-pro-preview' | 'gemini-3-flash-preview' = 'gemini-3-flash-preview') {
    const url = new URL("/m2m/bubbleq/analyze", this.baseUrl);
    url.searchParams.set("query", query);
    url.searchParams.set("model", model);
    
    // Notice the clean backticks here:
    const res = await fetch(url.toString(), {
      headers: { "Authorization": `X402 receipt=${this.paymentToken}` }
    });

    if (!res.ok) throw new Error(`Bubbleq Error: ${res.statusText}`);
    return res.json();
  }
}