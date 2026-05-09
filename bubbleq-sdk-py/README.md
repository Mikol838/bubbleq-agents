# Bubbleq Python SDK

The official Python client for interacting with the Bubbleq Intelligence Gateway via the X402 protocol.

## Installation

```bash
pip install bubbleq-sdk
```

## Quick Start

```python
from bubbleq_sdk import BubbleqClient

client = BubbleqClient(
    base_url="https://heyaia.org", 
    payment_token="test_token_123"
)

try:
    data = client.analyze("Bitcoin ETF outflows")
    print(data)
except Exception as e:
    print("Error fetching data from Bubbleq:", e)
```

## Integrating with LangChain

This repository includes a native LangChain tool wrapper, `bubbleq_langchain.py`, making it easy to plug Bubbleq directly into your LangChain agents.

```python
from langchain.agents import AgentType, initialize_agent
from langchain.llms import OpenAI
from bubbleq_langchain import BubbleqTool

bubbleq_tool = BubbleqTool(
    base_url="https://heyaia.org", 
    payment_token="test_token_123"
)

llm = OpenAI(temperature=0)
agent = initialize_agent(
    tools=[bubbleq_tool], 
    llm=llm, 
    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, 
    verbose=True
)

agent.run("Analyze the sentiment around NVIDIA's latest earnings report using Bubbleq.")
```

## Requirements
- Python 3.7+
- `requests` library
