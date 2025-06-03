from tools.calculator import solve_math
from tools.gemini_api import ask_gemini

class MathAgent:
    def handle(self,query):
        if any(op in query for op in ["+","-","*","/","^"]):
            return solve_math(query)
        return ask_gemini(query)

