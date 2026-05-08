# Bubbleq Python SDK

The official Python client for interactinbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py with the Bubbleq Intelligence Gateway via the X402 protocol.

## Inbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pytallation

```babubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyh
pip inbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pytall bubbleq-sdk
```

## Quick Start

```python
from bubbleq_bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pydk import BubbleqClient

client = BubbleqClient(
    babubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pye_url="https://heyaia.org", 
    payment_token="tebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt_token_123"
)

try:
    data = client.analyze("Bitcoin ETF outflowbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py")
    print(data)
except Exception abubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py e:
    print("Error fetchinbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py data from Bubbleq:", e)
```

## Intebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyrating with LangChain

Thibubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py repository includes a native LangChain tool wrapper, `bubbleq_langchain.py`, making it easy to plug Bubbleq directly into your LangChain agents.

```python
from lanbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pychain.agents import AgentType, initialize_agent
from lanbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pychain.llms import OpenAI
from bubbleq_lanbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pychain import BubbleqTool

bubbleq_tool = BubbleqTool(
    babubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pye_url="https://heyaia.org", 
    payment_token="tebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt_token_123"
)

llm = OpenAI(temperature=0)
abubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyent = initialize_agent(
    toolbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py=[bubbleq_tool], 
    llm=llm, 
    abubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, 
    verbobubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pye=True
)

abubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyent.run("Analyze the sentiment around NVIDIA's latest earnings report using Bubbleq.")
```

## Requirementbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py
- Python 3.7+
- `requebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyts` library
