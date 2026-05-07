# Bubbleq SDK (Python)

> **Official Python SDK for the Bubbleq Intelligence Gateway.**
> Enables AI agents (LangChain, AutoGen, CrewAI) to fetch real-time financial sentiment analysis via X402/L402.

[![PyPI version](https://badge.fury.io/py/bubbleq-sdk.svg)](https://badge.fury.io/py/bubbleq-sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

You can install the package directly via pip:

```bash
pip install bubbleq-sdk
```

## Usage

Here is a simple example of how to use the SDK in your Python scripts or AI agents:

```python
from bubbleq_sdk import BubbleqClient

# Initialize the client with your Gateway URL and X402 Payment Token
client = BubbleqClient(
    base_url="https://api.heyaia.org",
    payment_token="YOUR_X402_TOKEN"
)

# Run an analysis
try:
    result = client.analyze("Bitcoin ETF inflows")
    print("Sentiment Data:", result)
except Exception as e:
    print("Error fetching data from Bubbleq:", e)
```

## Requirements
- Python 3.7+
- `requests` library

## License
MIT
