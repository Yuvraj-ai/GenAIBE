from google import genai
from google.genai import types
import os
from dotenv import load_dotenv
load_dotenv()

client  = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))


# response = client.models.generate_content(
#     model="gemini-2.0-flash", contents="Explain how AI works in a few words"
# )
# print(response.text)


def ask_gemini(prompt):
    detailed_system_instruction = (
    "You are in intelligent Tutor. "
    "You know everything about all the subjects you are talked about. "
    "You never make up answers by yourself or HALLUCINATE . "
    "You always ask if they need more examples related to that topic, you do not make up answers and teach the solution step by step , "
    "Your answers are very detailed and upto the mark. "
    "When asked a question, you respond very professionaly, using examples, sources, citations where ever possible and when needed "
    "You only answer questions when you know about it. Do not respond when you dont know about the question asked."
)

    response = client.models.generate_content(
    model="gemini-2.5-flash-preview-05-20",
    config=types.GenerateContentConfig(
        system_instruction=detailed_system_instruction),
    contents=prompt
)
    return response.text

def classify_subject(prompt):
    detailed_system_instruction = (
    "You are worlds best subject classifier "
    "You know everything about all the subjects you are talked about. "
    "You only STRICTLY ANSWER IN JUST ONE WORD . "
    "The subject you need to classify are PHYSICS, MATHS, CHEMISTRY or OTHER. "
    "IF you are not sure about what the subject is simply answer OTHER. "
)

    response = client.models.generate_content(
    model="gemini-2.0-flash",
    config=types.GenerateContentConfig(
        system_instruction=detailed_system_instruction),
    contents=prompt
)

    return response.text


# print(classify_subject("What is priodic table ?"))