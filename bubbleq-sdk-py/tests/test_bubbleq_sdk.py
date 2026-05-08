import pytest
import responses
from bubbleq_sdk import BubbleqClient

BASE_URL = "https://api.heyaia.org"
PAYMENT_TOKEN = "test_token_123"

@pytest.fixture
def client():
    return BubbleqClient(base_url=BASE_URL, payment_token=PAYMENT_TOKEN)

@responses.activate
def test_analyze_success(client):
    query = "NVIDIA earnings"
    model = "gemini-3.1-pro-preview"
    
    mock_response = {
        "status": "success",
        "data": {
            "sentimentScore": 0.85,
            "sentimentExplanation": "Bullish momentum"
        }
    }

    # Match the query parameters
    responses.add(
        responses.GET,
        f"{BASE_URL}/m2m/bubbleq/analyze?query=NVIDIA+earnings&model={model}",
        json=mock_response,
        status=200
    )

    result = client.analyze(query, model=model)

    # Verify response
    assert result == mock_response

    # Verify authorization header
    request = responses.calls[0].request
    assert request.headers["Authorization"] == f"X402 receipt={PAYMENT_TOKEN}"
    assert "query=NVIDIA+earnings" in request.url
    assert f"model={model}" in request.url

@responses.activate
def test_analyze_default_model(client):
    query = "Bitcoin ETF"
    
    mock_response = {"status": "success"}

    responses.add(
        responses.GET,
        f"{BASE_URL}/m2m/bubbleq/analyze",
        json=mock_response,
        status=200,
        match=[responses.matchers.query_param_matcher({"query": query, "model": "gemini-3-flash-preview"})]
    )

    result = client.analyze(query)

    assert result == mock_response
    request = responses.calls[0].request
    assert "model=gemini-3-flash-preview" in request.url

@responses.activate
def test_analyze_http_error(client):
    query = "Tesla sales"
    
    responses.add(
        responses.GET,
        f"{BASE_URL}/m2m/bubbleq/analyze",
        body="Payment Required",
        status=402,
        match=[responses.matchers.query_param_matcher({"query": query, "model": "gemini-3-flash-preview"})]
    )

    with pytest.raises(Exception) as excinfo:
        client.analyze(query)

    assert "402 Client Error" in str(excinfo.value)
