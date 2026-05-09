import pytest
import responses
from bubbleq_langchain import BubbleqTool

BASE_URL = "https://heyaia.org"
PAYMENT_TOKEN = "test_token_123"

@pytest.fixture
def bubbleq_tool():
    return BubbleqTool(base_url=BASE_URL, payment_token=PAYMENT_TOKEN)

@responses.activate
def test_bubbleq_tool_run(bubbleq_tool):
    query = "NVIDIA earnings"
    
    mock_response = {
        "status": "success",
        "data": {
            "sentimentScore": 0.85
        }
    }

    # Responses match
    responses.add(
        responses.GET,
        f"{BASE_URL}/bubbleq/api/analyze",
        json=mock_response,
        status=200,
        match=[responses.matchers.query_param_matcher({"query": query, "model": "gemini-3-flash-preview"})]
    )

    # _run method
    result = bubbleq_tool._run(query)

    # Result should be stringified dict in this simple wrapper
    assert str(mock_response) == result

@responses.activate
def test_bubbleq_tool_error(bubbleq_tool):
    query = "Tesla failures"
    
    responses.add(
        responses.GET,
        f"{BASE_URL}/bubbleq/api/analyze",
        body="Internal Server Error",
        status=500,
        match=[responses.matchers.query_param_matcher({"query": query, "model": "gemini-3-flash-preview"})]
    )

    result = bubbleq_tool._run(query)
    assert "Error executing Bubbleq analysis" in result
    assert "500 Server Error" in result
