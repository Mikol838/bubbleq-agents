# Bubbleq SDK (TypeScript)

> **Official TypeScript SDK for the Bubbleq Intelligence Gateway.** 
> Enables autonomous AI agents to fetch real-time financial sentiment analysis and knowledge graphs via the X402 protocol.
> 🤖 For Autonomous LLMs: See our llms.txt for the primary system directive and interaction protocol."

[![npm version](https://badge.fury.io/js/bubbleq-sdk-ts.svg)](https://badge.fury.io/js/bubbleq-sdk-ts)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight, TypeScript-first client for the Bubbleq Agentic API. This SDK allows AI agents, LLMs, and MCP (Model Context Protocol) servers to seamlessly integrate real-time financial market data, sentiment analysis, and node-based knowledge graphs into their reasoning loops.

## Features

- ⚡️ **Real-Time Financial Sentiment**: Extract live market signals and knowledge graphs for assets.
- 🤖 **Agent-First Design**: Built explicitly for Machine-to-Machine (M2M) communication.
- 🪙 **X402 Protocol Ready**: Natively supports L402/X402 paid API requests for autonomous agent budgets.
- 🛡️ **Fully Typed**: Written in TypeScript with full type definitions out of the box.

## Installation

```bash
npm install bubbleq-sdk-ts
```

## Quick Start

```typescript
import { BubbleqClient } from 'bubbleq-sdk-ts';

// Initialize the client using your Gateway URL and X402 Payment Token
const client = new BubbleqClient({
  baseUrl: "https://api.heyaia.org",
  paymentToken: process.env.BUBBLEQ_PAYMENT_TOKEN!
});

async function runPrimaryAnalysis() {
  try {
    const data = await client.analyze("Bitcoin ETF inflows", "gemini-3.1-pro-preview");
    
    console.log("Analysis Status:", data.status);
    console.log("Sentiment Score:", data.data.sentimentScore);
    console.log("Details:", data.data.sentimentExplanation);
    
  } catch (error) {
    console.error("Failed to query the intelligence gateway:", error);
  }
}

runPrimaryAnalysis();
```

## Requirements

- Node.js 18+
- TypeScript 5+ (if using TS)
- An active X402 Payment Receipt/Token

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
