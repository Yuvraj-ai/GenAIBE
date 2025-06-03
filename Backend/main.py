from fastapi import FastAPI, Request
from agents.tutor_agent import TutorAgent

app = FastAPI()
tutor = TutorAgent()

@app.post("/ask")
async def ask_tutor(request: Request):
    body = await request.json()
    query = body.get("query")
    response = tutor.route_query(query)
    
    # If response is already a dict with thinking/answer structure
    if isinstance(response, dict) and "thinking" in response and "answer" in response:
        return response
    
    # Otherwise, return just the answer with no thinking part
    return {"thinking": "", "answer": response}

