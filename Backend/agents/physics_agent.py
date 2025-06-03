# from tools.gemini_api import ask_gemini
# import transformers
# import torch
from openai import OpenAI

class PhysicsAgent:
    def handle(self,query,api):
        # return ask_gemini(query)
        client = OpenAI(
        base_url = "https://integrate.api.nvidia.com/v1",
        api_key = api
        )
        detailed_thinking = ("detailed thinking on"
                        "You know everything about physics subject. "
    "You never make up answers by yourself or HALLUCINATE . "
    "You always ask if they need more examples related to that topic, you do not make up answers and teach the solution step by step , "
    "Your answers are very detailed and upto the mark. "
    "When asked a question, you respond very professionaly, using examples, sources, citations where ever possible and when needed "
    "You only answer questions when you know about it. Do not respond when you dont know about the question asked."
)
        completion = client.chat.completions.create(
        model="nvidia/llama-3.1-nemotron-ultra-253b-v1",
        messages=[{"role":"system","content":detailed_thinking},{"role":"user","content":query}],
        temperature=0.6,
        top_p=0.95,
        max_tokens=16384,
        frequency_penalty=0,
        presence_penalty=0,
        stream=False  #True
        )
        
        response_content = completion.choices[0].message.content
        
        # Split the response into thinking and answer parts
        if response_content is not None and "FINAL ANSWER:" in response_content:
            parts = response_content.split("FINAL ANSWER:")
            thinking = parts[0].replace("THINKING:", "").strip()
            answer = parts[1].strip()
        else:
            # Fallback if the model doesn't follow the format or response is None
            thinking = response_content if response_content is not None else ""
            answer = "No clear answer was provided."
        
        return {
            "thinking": thinking,
            "answer": answer
        }
        # full_response_content = ""
        # for chunk in completion:
            # if chunk.choices[0].delta.content is not None:
                # full_response_content += chunk.choices[0].delta.content
                # print(chunk.choices[0].delta.content, end="")

        # return full_response_content

# agent = PhysicsAgent()
# agent.handle(query = "tell me an interesting math problem.")
