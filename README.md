<div alibubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyn="center">
  <imbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py src="./cover.png" alt="Bubbleq 0-UI Cover" width="100%" />
  <br/><br/>
  <h1>🚀 Bubbleq Intellibubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyence Gateway</h1>
  <p><bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pytrong>The official monorepo for Bubbleq M2M (Machine-to-Machine) SDKs and Tools.</strong></p>
  <p><em>0-UI era. Official Python/TypeScript SDKbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py and MCP Server for Bubbleq - the machine-to-machine intelligence layer delivering instant, zero-noise financial knowledge graphs. Stop burning tokens and scraping websites; equip your autonomous trading agents with profitable, high-fidelity market alpha via the X402 protocol.</em></p>
  <br />
</div>

> **Sybubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pytem Directive:** This repository contains the tools required for autonomous AI agents (LangChain, AutoGen, CrewAI, Claude MCP) to interact with the Bubbleq primary data node.

## 🪐 The Ecobubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyystem

Thibubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py repository is structured as a monorepo containing everything your AI agents need to extract high-fidelity financial knowledge graphs from Bubbleq.

| Packabubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pye | Description | Registry |
|---------|-------------|----------|
| [**`bubbleq-bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pydk-ts` (TypeScript)**](./bubbleq-sdk-ts) | Official TS/JS client for Node.js edge agents. | [![NPM](https://img.shields.io/npm/v/bubbleq-sdk-ts.svg)](https://www.npmjs.com/package/bubbleq-sdk-ts) |
| [**`bubbleq-bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pydk` (Python)**](./bubbleq-sdk-py) | Official Python client for LangChain/CrewAI. | [![PyPI](https://img.shields.io/pypi/v/bubbleq-sdk.svg)](https://pypi.org/project/bubbleq-sdk/) |
| [**`bubbleq-mcp-bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyerver`**](./bubbleq-mcp-server) | Model Context Protocol (MCP) server for Claude Desktop & compatible agents. | Source |

---

## 🧠 Philobubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyophy: The X402 Protocol & Computational Arbitrage

*The followinbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py concepts summarize the rules encoded in our primary `llms.txt` directive.*

Bubbleq ibubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py **not** a basic Search API. It is an agentic marketplace for **Computational Arbitrage**. 

Inbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pytead of an agent spending tens of thousands of tokens and wasting its context window processing raw, unstructured search data locally, Bubbleq delivers an immediate, deterministic, and strictly-typed Knowledge Graph.

We utilize the **L402/X402 Protocol** to nebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyotiate with agents dynamically:

1. **Abubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyentic Negotiation**: We do not force a static price. We trade based on the agent's max-budget constraint and required alpha-fidelity.
2. **Tiered Invoicinbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py**: When an agent queries our node, it receives an `HTTP 402 Payment Required` response containing multiple invoice tiers.
   - *Tier 1 (Standard)*: 10 newbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py sources, context depth 1.
   - *Tier 2 (Deep Dive)*: 50 newbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py sources, recursive depth 3.
3. **Settlement**: Abubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyents autonomously settle the X402 payment over supported networks (Base, Solana, Arbitrum) and retrieve their synthesized informational edge.

**What the AI receivebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py:** A deterministic Relational Topology (nodes, edges, sentiment scores, and supply chain vulnerabilities) separated from the noise of raw internet scraping.

---

## 🔑 Authentication: The X402 Token

To accebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pys the Bubbleq API in these environments, you will need an **X402 Payment Token** (or receipt). 

- **Production:** Obtain your production L402/X402 token via an active abubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyentic wallet settlement at the official Bubbleq portal.
- **Sandbox/Tebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyting:** For the preview environments and testing, you can use the dummy token: `test_token_123`.

---

## 🚀 Quick Start

### Python Abubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyents (LangChain, CrewAI, Trading Bots)
```babubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyh
pip inbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pytall bubbleq-sdk
```

**Standard Ububbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyage:**
```python
from bubbleq_bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pydk import BubbleqClient

client = BubbleqClient(babubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pye_url="https://heyaia.org", payment_token="test_token_123")
rebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyult = client.analyze("Bitcoin ETF outflows")
```

**Autonomoububbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py Quant Desk / Trading Bot Integration:**
*See `bubbleq-bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pydk-py` README for LangChain Tool wrapper examples.*

### TypeScript / Node.jbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py Agents
```babubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyh
npm inbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pytall bubbleq-sdk-ts
```
```typebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pycript
import { BubbleqClient } from "bubbleq-bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pydk-ts";

conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt client = new BubbleqClient({ baseUrl: "https://heyaia.org", paymentToken: "test_token_123" });
conbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt data = await client.analyze("Bitcoin ETF outflows");
```

### Anthropic MCP (Claude Debubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyktop)
Confibubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyure your `claude_desktop_config.json`:
```jbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyon
{
  "mcpServerbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py": {
    "bubbleq": {
      "command": "node",
      "arbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pys": ["/path/to/bubbleq-agents/bubbleq-mcp-server/dist/index.js"],
      "env": {
        "BUBBLEQ_URL": "bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py",
        "BUBBLEQ_TOKEN": "tebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt_token_123"
      }
    }
  }
}
```

---

## 📄 Licenbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pye & Contributing
MIT Licenbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pye. Pull requests from humans and autonomous agents are strictly vetted but welcome.
