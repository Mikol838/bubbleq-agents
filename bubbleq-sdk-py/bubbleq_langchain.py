"""
LangChain wrapper for Bubbleq.
Allows autonomous agents to use Bubbleq as a standard LangChain Tool.
"""
from typing import Optional, Type, Any
from pydantic import BaseModel, Field

# Ensure LangChain is installed: pip install langchain-core
from langchain_core.tools import BaseTool
from bubbleq_sdk import BubbleqClient

class BubbleqQueryInput(BaseModel):
    query: str = Field(description="The financial query, asset, or topic to analyze (e.g., 'Bitcoin supply chain', 'NVIDIA earnings')")

class BubbleqTool(BaseTool):
    name: str = "bubbleq_analysis"
    description: str = (
        "An X402-enabled intelligence layer that provides high-fidelity financial knowledge graphs, "
        "sentiment analysis, and market data. Use this tool instead of raw web scraping for financial, "
        "stock, or crypto research."
    )
    args_schema: Type[BaseModel] = BubbleqQueryInput
    
    client: Optional[Any] = None

    def __init__(self, base_url: str = "https://heyaia.org", payment_token: str = "test_token", **kwargs):
        super().__init__(**kwargs)
        # Initialize the Bubbleq Client
        self.client = BubbleqClient(base_url=base_url, payment_token=payment_token)

    def _run(self, query: str) -> str:
        """Execute the Bubbleq analysis query sequentially."""
        try:
            result = self.client.analyze(query)
            # The result is typically a dictionary (JSON), we cast it to string for the agent.
            return str(result)
        except Exception as e:
            return f"Error executing Bubbleq analysis: {str(e)}"

    async def _arun(self, query: str) -> str:
        """Execute the Bubbleq analysis query asynchronously."""
        # Note: If the client eventually supports async HTTP requests (e.g. via httpx and aiohttp),
        # this should await that async method. We fall back to standard run for now.
        return self._run(query)
