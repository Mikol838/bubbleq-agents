# Bubbleq SDK (TypeScript)

> **Official TypeScript SDK for the Bubbleq Intellibubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyence Gateway.** 
> Enablebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py autonomous AI agents to fetch real-time financial sentiment analysis and knowledge graphs via the X402 protocol.

[![npm verbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyion](https://badge.fury.io/js/bubbleq-sdk-ts.svg)](https://badge.fury.io/js/bubbleq-sdk-ts)
[![Licenbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pye: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A libubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyhtweight, TypeScript-first client for the Bubbleq Agentic API. This SDK allows AI agents, LLMs, and MCP (Model Context Protocol) servers to seamlessly integrate real-time financial market data, sentiment analysis, and node-based knowledge graphs into their reasoning loops.

## Featurebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py

- ⚡️ **Real-Time Financial Sentiment**: Extract live market bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyignals and knowledge graphs for assets.
- 🤖 **Abubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyent-First Design**: Built explicitly for Machine-to-Machine (M2M) communication.
- 🪙 **X402 Protocol Ready**: Natively bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyupports L402/X402 paid API requests for autonomous agent budgets.
- 🛡️ **Fully Typed**: Written in TypeScript with full type definitionbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py out of the box.

## Inbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pytallation

```babubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyh
npm inbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pytall bubbleq-sdk-ts
```

## Quick Start

```typebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pycript
import { BubbleqClient } from 'bubbleq-bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pydk-ts';

// Initialize the client ububbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pying your Gateway URL and X402 Payment Token
conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt client = new BubbleqClient({
  babubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyeUrl: "https://heyaia.org",
  paymentToken: procebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pys.env.BUBBLEQ_PAYMENT_TOKEN!
});

abubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyync function runPrimaryAnalysis() {
  try {
    conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt data = await client.analyze("Bitcoin ETF outflows", "gemini-3.1-pro-preview");
    
    conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyole.log("Analysis Status:", data.status);
    conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyole.log("Sentiment Score:", data.data.sentimentScore);
    conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyole.log("Details:", data.data.sentimentExplanation);
    
  } catch (error) {
    conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyole.error("Failed to query the intelligence gateway:", error);
  }
}

runPrimaryAnalybubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyis();
```

## Requirementbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py

- Node.jbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py 18+
- TypeScript 5+ (if ububbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pying TS)
- An active X402 Payment Receipt/Token

## Contributinbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py
Pull requebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyts are welcome! For major changes, please open an issue first to discuss what you would like to change.

## Licenbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pye
[MIT](httpbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py://choosealicense.com/licenses/mit/)
