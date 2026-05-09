import requests
from typing import Literal

class BubbleqClient:
    def __init__(self, base_url: str, payment_token: str):
        self.base_url = base_url
        self.payment_token = payment_token

    def analyze(self, query: str, model: Literal['gemini-3.1-pro-preview', 'gemini-3-flash-preview'] = 'gemini-3-flash-preview'):
        url = f"{self.base_url}/api/agent/analyze"
        headers = { "Authorization": f"X402 receipt={self.payment_token}" }
        params = { "query": query, "model": model }
        
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()
        return response.json()