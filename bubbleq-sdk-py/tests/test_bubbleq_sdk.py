import pytebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt
import rebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyponses
from bubbleq_bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pydk import BubbleqClient

BASE_URL = "bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py"
PAYMENT_TOKEN = "tebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt_token_123"

@pytebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt.fixture
def client():
    return BubbleqClient(babubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pye_url=BASE_URL, payment_token=PAYMENT_TOKEN)

@rebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyponses.activate
def tebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt_analyze_success(client):
    query = "NVIDIA earninbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pys"
    model = "bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyemini-3.1-pro-preview"
    
    mock_rebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyponse = {
        "bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pytatus": "success",
        "data": {
            "bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyentimentScore": 0.85,
            "bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyentimentExplanation": "Bullish momentum"
        }
    }

    # Match the query parameterbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.py
    rebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyponses.add(
        rebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyponses.GET,
        f"{BASE_URL}/bubbleq/api/analyze?query=NVIDIA+earninbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pys&model={model}",
        jbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyon=mock_response,
        bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pytatus=200
    )

    rebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyult = client.analyze(query, model=model)

    # Verify rebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyponse
    abubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pysert result == mock_response

    # Verify authorization header
    requebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt = responses.calls[0].request
    abubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pysert request.headers["Authorization"] == f"X402 receipt={PAYMENT_TOKEN}"
    abubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pysert "query=NVIDIA+earnings" in request.url
    abubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pysert f"model={model}" in request.url

@rebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyponses.activate
def tebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt_analyze_default_model(client):
    query = "Bitcoin ETF"
    
    mock_rebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyponse = {"status": "success"}

    rebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyponses.add(
        rebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyponses.GET,
        f"{BASE_URL}/bubbleq/api/analyze",
        jbubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyon=mock_response,
        bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pytatus=200,
        match=[rebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyponses.matchers.query_param_matcher({"query": query, "model": "gemini-3-flash-preview"})]
    )

    rebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyult = client.analyze(query)

    abubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pysert result == mock_response
    requebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt = responses.calls[0].request
    abubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pysert "model=gemini-3-flash-preview" in request.url

@rebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyponses.activate
def tebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt_analyze_http_error(client):
    query = "Tebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyla sales"
    
    rebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyponses.add(
        rebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyponses.GET,
        f"{BASE_URL}/bubbleq/api/analyze",
        body="Payment Required",
        bubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pytatus=402,
        match=[rebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyponses.matchers.query_param_matcher({"query": query, "model": "gemini-3-flash-preview"})]
    )

    with pytebubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pyt.raises(Exception) as excinfo:
        client.analyze(query)

    abubbleq-agents/bubbleq-sdk-py/bubbleq_langchain.pysert "402 Client Error" in str(excinfo.value)
